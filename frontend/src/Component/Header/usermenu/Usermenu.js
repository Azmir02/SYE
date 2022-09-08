import React from 'react'
import Profile from './Profile'

const Usermenu = () => {
  return (
    <div className='w-[360px] bg-white h-[500px] relative rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]'>
        <div className='absolute top-[20px] left-[50%] translate-x-[-50%]'>
            <Profile/>
        </div>
    </div>
  )
}

export default Usermenu