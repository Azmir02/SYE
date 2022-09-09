import React from 'react'
import Return from '../../../svg/return'

const Settingsmenu = ({setVisible}) => {
  return (
    <>
        <div className='flex items-center justify-between px-1'>
            <div className='cursor-pointer w-[40px] h-[40px] rounded-full transition-all duration-200 ease-linear hover:bg-[#F2F2F2] flex items-center justify-center' onClick={()=>{setVisible(0)}}>
                <Return color="#65676B"/>
            </div>
            <div className='w-[80%]'>
                <h3 className='font-primary text-2xl font-bold'>Settings & Privacy</h3>
            </div>
        </div>

        <div className='flex items-center justify-between mt-5 mb-2 cursor-pointer hover:bg-[#F2F2F2] p-2 rounded-md transition-all duration-200 ease-linear'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                <i className='settings_filled_icon'></i>
            </div>
            <div className='ml-3 w-[230px]'>
                <p className='font-primary text-lg font-medium leading-[0.8]'>Settings</p>
            </div>
        </div>

        <div className='flex items-center justify-between my-2 cursor-pointer hover:bg-[#F2F2F2] p-2 rounded-md transition-all duration-200 ease-linear'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                <i className='privacy_checkup_icon'></i>
            </div>
            <div className='ml-3 w-[230px]'>
                <p className='font-primary text-lg font-medium leading-[0.8]'>Privacy checkup</p>
            </div>
        </div>

        <div className='flex items-center justify-between my-2 cursor-pointer hover:bg-[#F2F2F2] p-2 rounded-md transition-all duration-200 ease-linear'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                <i className='privacy_shortcuts_icon'></i>
            </div>
            <div className='ml-3 w-[230px]'>
                <p className='font-primary text-lg font-medium leading-[0.8]'>Privacy center</p>
            </div>
        </div>

        <div className='flex items-center justify-between my-2 cursor-pointer hover:bg-[#F2F2F2] p-2 rounded-md transition-all duration-200 ease-linear'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                <i className='activity_log_icon'></i>
            </div>
            <div className='ml-3 w-[230px]'>
                <p className='font-primary text-lg font-medium leading-[0.8]'>Activity log</p>
            </div>
        </div>

        <div className='flex items-center justify-between my-2 cursor-pointer hover:bg-[#F2F2F2] p-2 rounded-md transition-all duration-200 ease-linear'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                <i className='news_icon'></i>
            </div>
            <div className='ml-3 w-[230px]'>
                <p className='font-primary text-lg font-medium leading-[0.8]'>Feed</p>
            </div>
        </div>

        <div className='flex items-center justify-between my-2 cursor-pointer hover:bg-[#F2F2F2] p-2 rounded-md transition-all duration-200 ease-linear'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                <i className='language_icon'></i>
            </div>
            <div className='ml-3 w-[230px]'>
                <p className='font-primary text-lg font-medium leading-[0.8]'>Language</p>
            </div>
        </div>
    </>
  )
}

export default Settingsmenu