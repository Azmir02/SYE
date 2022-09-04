import React from 'react'
import Logo from '../../svg/logo'
import Search from '../../svg/search'
import HomeActive from '../../svg/homeActive'
import Messenger from '../../svg/messenger'
import ArrowDown from '../../svg/arrowDown'
import { useSelector } from 'react-redux'
import Notifications from '../../svg/notifications'
import { Link } from 'react-router-dom'

const Header = () => {
    const users = useSelector((users)=>(users.login.loggedin))
  return (
    <div className="heading flex justify-between items-center px-4 py-5 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] fixed top-0 left-0 w-full">
       <div className="left-part w-[320px] flex justify-between items-center">
        <Logo/>
        <div className="search flex items-center bg-[#F0F2F5] px-4 py-2 rounded-full">
            <Search color="#65676B"/>
            <input type="text" className='focus:outline-none ml-2 bg-[#F0F2F5] font-primary text-base' placeholder='#Explore...' />
        </div>
       </div>
       <div className="right-part w-[405px] flex items-center">
       <Link className='ml-2 flex items-center bg-[#F1F4F7] w-[120px] px-4 py-2 rounded-full box-border' to="/">
        <HomeActive/>
        <span className='inline-block ml-2 font-primary text-lg text-black'>Home</span>
        </Link>
        <div className='ml-5'>
            <Messenger/>
        </div>
        <div className='ml-5 relative after:absolute after:content[] after:w-[1px] after:h-[30px] after:bg-secondary_color after:top-[-5px] after:right-0 pr-2'>
            <Notifications/>
        </div>
        <div className='ml-2 flex items-center justify-between bg-[#F1F4F7] rounded-full px-4 py-2'>
            <div className='w-[30px] h-[30px] rounded-full bg-white overflow-hidden'></div>
            <span className='inline-block ml-3 text-base font-primary text-black whitespace-nowrap w-[74px] overflow-hidden text-ellipsis'>{users?.fName}</span>
            <div className='ml-4'>
                <ArrowDown/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Header