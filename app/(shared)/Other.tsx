import React from "react";
import Card from "./Card";

type Props = {};

const Other = (props: Props) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      <p className="my-8 text-2xl font-bold">Other Trending Posts</p>
      <div className="grid-cols-2 gap-16 sm:grid">
        <Card
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
        />
        <Card
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
        />
        <Card
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
        />
        <Card
          className="mt-5 bg-wh-500 sm:mt-0"
          imageHeight="h-80"
        />
      </div>
    </section>
  );
}

export default Other;
