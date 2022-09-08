import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Profile = () => {
    const user = useSelector(user=>user.login.loggedin)
  return (
    <div className='w-[330px] bg-white p-5 rounded-md shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]'>
        <Link to="/profile" className='flex items-center border-b border-solid border-[#d3d3d3] pb-3'>
            <div className='w-[40px] h-[40px] rounded-full bg-primary_bg'>
                
            </div>
            <div className='w-[70%] ml-2'>
                <h4 className='capitalize font-primary text-lg font-medium text-black'>{user?.fName} {user?.lName}</h4>
            </div>
        </Link>
        <span className='capitalize text-blue font-primary cursor-pointer font-medium inline-block mt-3'>See All Profiles</span>
    </div>
  )
}

export default Profile