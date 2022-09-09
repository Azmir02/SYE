import React, { useState } from 'react'
import Helpmenu from './Helpmenu'
import Profile from './Profile'
import Settingsmenu from './Settingsmenu'

const Usermenu = ({user}) => {
    const [visible,setVisible] = useState(0)
  return (
    <div className='w-[360px] bg-white p-7 relative rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]'>
        {
        visible === 0 && 
        <>
            <div className='absolute top-[20px] left-[50%] translate-x-[-50%]'>
            <Profile user={user}/>
            </div>
            <div className='mt-[160px] cursor-pointer'>
            <div className='flex items-center justify-between border-b border-solid border-[#d3d3d3] pb-3'>
                <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                    <i className='report_filled_icon'></i>
                </div>
                <div className='ml-3 w-[250px]'>
                    <p className='font-primary text-lg font-medium leading-[0.8]'>Give Feedback</p>
                    <span className='font-primary text-sm text-secondary_color'>Help us improve SYE</span>
                </div>
            </div>
            <div className='flex items-center justify-between my-3' onClick={()=>{setVisible(1)}}>
                <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                    <i className='settings_filled_icon'></i>
                </div>
                <div className='ml-3 w-[250px]'>
                    <p className='font-primary text-lg font-medium leading-[0.8]'>Settings & privacy</p>
                </div>
                <i className='right_icon'></i>
            </div>
            <div className='flex items-center justify-between my-3' onClick={()=>{setVisible(2)}}>
                <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                    <i className='help_filled_icon'></i>
                </div>
                <div className='ml-3 w-[250px]'>
                    <p className='font-primary text-lg font-medium leading-[0.8]'>Helps & support</p>
                </div>
                <i className='right_icon'></i>
            </div>
            <div className='flex items-center justify-between my-3'>
                <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                    <i className='dark_filled_icon'></i>
                </div>
                <div className='ml-3 w-[250px]'>
                    <p className='font-primary text-lg font-medium leading-[0.8]'>Display & accesssibility</p>
                </div>
                <i className='right_icon'></i>
            </div>
            <div className='flex items-center justify-between my-3'>
                <div className='w-[40px] h-[40px] rounded-full bg-[#F0F2F5] flex items-center justify-center'>
                    <i className='logout_filled_icon'></i>
                </div>
                <div className='ml-3 w-[250px]'>
                    <p className='font-primary text-lg font-medium leading-[0.8]'>Logout</p>
                </div>
            </div>
            </div>
        </>
             
        }
        {visible === 1 && <Settingsmenu setVisible={setVisible}/>}
        {visible === 2 && <Helpmenu setVisible={setVisible}/>}
    </div>
  )
}

export default Usermenu