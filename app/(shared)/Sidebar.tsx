import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Ad1 from "../../public/assets/ad-1.jpg";
import Ad2 from "../../public/assets/ad-2.jpg";
import Image from "next/image";

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="px-5 py-3 text-xs font-bold text-center bg-wh-900 text-wh-50">
        Subscribe and Follow
      </h4>
      <div className='mx-5 my-5'>
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className='my-8 bg-wh-900 text-wh-50'>
        <Image
          className='hidden w-full my-8 md:block'
          alt="ad-2"
          placeholder="blur"
          src={Ad2}
          width={500}
          height={1000}
        />
      </div>
      <div className='my-8 bg-wh-900 text-wh-50'>
        <Image
          className='hidden w-full my-8 md:block'
          alt="ad-1"
          placeholder="blur"
          src={Ad1}
          width={500}
          height={1000}
        />
      </div>
      <h4 className="px-5 py-3 text-xs font-bold text-center bg-wh-900 text-wh-50">
        About the Blog
      </h4>
    </section>
  )
}

export default Sidebar