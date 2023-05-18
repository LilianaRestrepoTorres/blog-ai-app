import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="px-10 py-10 bg-wh-900 text-wh-50">
      <div className="justify-between gap-16 mx-auto sm:flex">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Future TrendAI Blog</h4>
          <p className="my-5">
          Latest trends and AI-generated posts.
          Stay informed and inspired with real-time insights powered by OpenAI API.
          Explore the fusion of human expertise and artificial intelligence.
          </p>
          <p>© Future Trend AI Blog - All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">AI-generated posts</p>
          <p className="my-5">Latest trends</p>
          <p>Technology breakthrough</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">linkedin.com/in/lilianarestrepotorres</p>
          <p>github.com/LilianaRestrepoTorres</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
