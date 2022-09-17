import React from 'react'
import { useSelector } from 'react-redux'
import Feeling from '../../svg/feeling'
import LiveVideo from '../../svg/liveVideo'
import Photo from '../../svg/photo'

const Post = () => {
    const users = useSelector((users)=>(users.login.loggedin))
  return (
    <div className='mt-5 p-5 bg-white rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]'>
        <div className='flex items-center justify-between'>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden bg-[#F1F4F7]'></div>
            <div className='w-[90%] px-5 py-2 rounded-full bg-[#f0f2f5] cursor-pointer hover:bg-[#E7E9EB]'>
                <span className='font-primar text-base text-primary_bg'>What's on you mind <span className='capitalize'>{users.fName}</span> ?</span>
            </div>
        </div>
        <div className='flex items-center justify-center mt-5'>
            <div className=' flex items-center justify-between border border-[#E7E9EB] border-solid rounded-full px-4 py-2 cursor-pointer'>
                <LiveVideo color="#D17274"/>
                <span className='text-base font-primary font-medium text- ml-2'>Live video</span>
            </div>
            <div className=' flex items-center justify-between border border-[#E7E9EB] border-solid rounded-full px-4 py-2 cursor-pointer mx-5'>
                <Photo color="#21D997"/>
                <span className='text-base font-primary font-medium text-black ml-2'>Photo/video</span>
            </div>
            <div className=' flex items-center justify-between border border-[#E7E9EB] border-solid rounded-full px-4 py-2 cursor-pointer'>
                <Feeling color="#D9A94A"/>
                <span className='text-base font-primary font-medium text-black ml-2'>Feeling/Activity</span>
            </div>
        </div>
    </div>
  )
}

export default Post