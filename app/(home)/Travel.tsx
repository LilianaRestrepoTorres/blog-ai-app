import React from "react";
import Card from "app/(shared)/Card";
import { Post } from "@prisma/client";

type Props = {
  travelPosts: Array<Post>
};

const Travel = ({travelPosts}: Props) => {
  return <section className="mt-10">
    <hr className="border-1" />
    <div className="flex items-center gap-3 my-8">
      <h4 className="px-5 py-2 text-sm font-bold bg-accent-green text-wh-900">
        TRAVEL
      </h4>
      <p className="text-2xl font-bold">New Travel Experiences</p>
    </div>

    <div className="justify-between gap-8 sm:flex">
      <Card
        className="mt-5 basis-1/3 sm:mt-0"
        imageHeight="h-80"
        post={travelPosts[0]}
      />
      <Card
        className="mt-5 basis-1/3 sm:mt-0"
        imageHeight="h-80"
        post={travelPosts[1]}
      />
      <Card
        className="mt-5 basis-1/3 sm:mt-0"
        imageHeight="h-80"
        post={travelPosts[2]}
      />
    </div>
    <Card
      className="items-center justify-between gap-3 mb-5 sm:flex mt-7"
      imageHeight="h-80"
      post={travelPosts[3]}
    />
  </section>;
}

export default Travel;
