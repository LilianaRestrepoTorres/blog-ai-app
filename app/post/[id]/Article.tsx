import { Editor, EditorContent } from "@tiptap/react";
import React, { useState } from "react";
import EditorMenuBar from "./EditorMenuBar";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

type Props = {
  contentError: string;
  editor: Editor | null;
  isEditable: boolean;
  setContent: (content: string) => void;
  title: string;
};

const Article = ({
  contentError,
  editor,
  isEditable,
  setContent,
  title,
}: Props) => {
  const [role, setRole] = useState<string>("I am a helpful assistant.");

  if (!editor) {
    return null;
  }

  const postAiContent = async () => {
    editor
      .chain()
      .focus()
      .setContent("Generating AI Content. Please wait...")
      .run();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/openai`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          role: role,
        }),
      }
    );
    const data = await response.json();
    console.log('data', data)

    editor
      .chain()
      .focus().setContent(data.content).run();

    setContent(data.content);
  };

  return (
    <article className="leading-8 text-wh-500">
      {isEditable && (
        <div className="p-3 mb-3 border-2 rounded-md bg-wh-50">
          <h4 className="p-0 m-0"> Generate AI Content</h4>
          <p className="p-0 my-1 text-xs"> What type of writer do you want?</p>
          <div className="flex justify-between gap-5">
            <input
              className="w-full px-3 py-1 border-2 rounded-md bg-wh-50"
              placeholder="Role"
              onChange={(e) => {
                setRole(e.target.value);
              }}
              value={role}
            />
            <button type="button" onClick={postAiContent}>
              <RocketLaunchIcon className="w-8 h-8 text-accent-orange hover:text-wh-300" />
            </button>
          </div>
        </div>
      )}

      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="mt-2 mb-5 border-1" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
    </article>
  );
};

export default Article;
