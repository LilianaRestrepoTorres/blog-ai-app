import { Post } from "@prisma/client";
import React from "react";
import Card from "./Card";

type Props = {
  otherPosts: Array<Post>
};

const Other = ({otherPosts}: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      <p className="my-8 text-2xl font-bold">Other Trending Posts</p>
      <div className="grid-cols-2 gap-16 sm:grid">
        <Card
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[0]}
        />
        <Card
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[1]}
        />
        <Card
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[2]}
        />
        <Card
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[3]}
        />
      </div>
    </section>
  );
}

export default Other;
