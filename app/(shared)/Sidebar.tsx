import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'

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
        Advert Image
      </div>
      <h4 className="px-5 py-3 text-xs font-bold text-center bg-wh-900 text-wh-50">
        About the Blog
      </h4>
      <div className='my-8 bg-wh-900 text-wh-50'>
        Profile Image
      </div>
      <h4 className="px-5 py-3 font-bold text-center text-wh-500">
        Liliana Restrepo
      </h4>
      <p className='text-sm text-center text-wh-500'>
        Some text
      </p>
    </section>
  )
}

export default Sidebar