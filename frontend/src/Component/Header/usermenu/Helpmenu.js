import React from 'react'
import Return from '../../../svg/return'

const Helpmenu = ({setVisible}) => {
  return (
    <>
        <div className='flex items-center justify-between px-1'>
            <div className='cursor-pointer w-[40px] h-[40px] rounded-full transition-all duration-200 ease-linear hover:bg-[#F2F2F2] flex items-center justify-center' onClick={()=>{setVisible(0)}}>
                <Return color="#65676B"/>
            </div>
            <div className='w-[80%]'>
                <h3 className='font-primary text-2xl font-bold'>Help & Support</h3>
            </div>
        </div>

        <div className='flex items-center justify-between mt-5 mb-2 cursor-pointer hover:bg-[#F2F2F2] p-2 rounded-md transition-all duration-200 ease-linear'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                <i className='help_center_icon'></i>
            </div>
            <div className='ml-3 w-[230px]'>
                <p className='font-primary text-lg font-medium leading-[0.8]'>Help center</p>
            </div>
        </div>

        <div className='flex items-center justify-between my-2 cursor-pointer hover:bg-[#F2F2F2] p-2 rounded-md transition-all duration-200 ease-linear'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                <i className='email_icon'></i>
            </div>
            <div className='ml-3 w-[230px]'>
                <p className='font-primary text-lg font-medium leading-[0.8]'>Support inbox</p>
            </div>
        </div>

        <div className='flex items-center justify-between my-2 cursor-pointer hover:bg-[#F2F2F2] p-2 rounded-md transition-all duration-200 ease-linear'>
            <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                <i className='info_filled_icon'></i>
            </div>
            <div className='ml-3 w-[230px]'>
                <p className='font-primary text-lg font-medium leading-[0.8]'>Report a problem</p>
            </div>
        </div>
    </>
  )
}

export default Helpmenu