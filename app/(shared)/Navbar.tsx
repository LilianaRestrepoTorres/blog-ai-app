import React from "react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Ad1 from "public/assets/ad-1.jpg";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex items-center justify-between w-full px-10 py-4 bg-wh-900 text-wh-10">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex items-center justify-between gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
        </div>
        <div>
          <p>Sign In</p>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mx-10 mt-5 mb-4">
        <div className="basis-2/3 md:mt-3">
          <h1 className="text-3xl font-bold md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="mt-3 text-sm">
            Blog dedicated towards AI and generation and job automation.
          </p>
        </div>
        <div className="relative w-auto h-32 basis-full bg-wh-500">
          <Image
            fill
            alt="ad-1"
            placeholder="blur"
            src={Ad1}
            sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{objectFit: "cover"}}
          />
        </div>
      </div>
      <hr className="mx-10 border-1" />
    </header>
  );
};

export default Navbar;
