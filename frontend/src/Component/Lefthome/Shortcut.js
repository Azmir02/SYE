import React from 'react'
import Shortdetails from './Shortdetails'

const Shortcut = () => {
  return (
    <div className='mt-3 bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] px-5 py-4 overflow-y-auto group'>
        <div className='flex items-center justify-between'>
            <h3 className='text-base font-primary font-medium text-black'>Your Shortcuts</h3>
            <span className='hidden group-hover:block text-base font-primary text-blue cursor-pointer'>Edit</span>
        </div>
        <div className='relative pb-2 mb-4 after:absolute after:content[] after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#F0F2F5]'></div>
        <Shortdetails link = "https://www.youtube.com/" img="../../images/ytb.png" text="My Youtube Channel"/>
        <Shortdetails link = "https://www.instagram.com/" img="../../images/insta.png" text="My Instagram"/>
    </div>
  )
}

export default Shortcut