import React from "react";
import Card from "app/(shared)/Card";

type Props = {};

const Tech = (props: Props) => {
  return (
    <section>
      <hr className="boder-1" />
      <div className="flex items-center gap-3 my-8">
        <h4 className="px-5 py-2 text-sm font-bold bg-accent-orange text-wh-900">
          HOT
        </h4>
        <p className="text-2xl font-bold">Latest News in Technology</p>
      </div>
      <div className="grid-cols-2 grid-rows-3 my-5 sm:grid gap-x-8 gap-y-8">
        <Card
          className="col-span-1 row-span-3 bg-wh-500"
          imageHeight="h-96"
          isLongForm
        />
        <Card
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 bg-wh-500 sm:mt-0"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 bg-wh-500 sm:mt-0"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 bg-wh-500 sm:mt-0"
          imageHeight="h-48"
          isSmallCard
        />
      </div>
    </section>
  );
}

export default Tech;
