import React, { useRef, useState } from 'react'
import Logo from '../../svg/logo'
import Search from '../../svg/search'
import HomeActive from '../../svg/homeActive'
import Messenger from '../../svg/messenger'
import ArrowDown from '../../svg/arrowDown'
import OutsideClick from '../../helpers/click'
import Menu from '../../svg/menu'
import { useSelector } from 'react-redux'
import Notifications from '../../svg/notifications'
import { Link } from 'react-router-dom'
import Searchbox from './Searchbox'
import MenuOption from './MenuOption'
import Usermenu from './usermenu/Usermenu'

const Header = () => {
    const users = useSelector((users)=>(users.login.loggedin))
    const [show,setShow] = useState(false)
    const [menushow,setMenushow] = useState(false)
    const clickOutside = useRef(null)
    const outsideClick = useRef(null)
    OutsideClick(outsideClick,()=>{
        setShow(false)
        setMenushow(false)
    })
    
  return (
    <div className="heading flex justify-between items-center px-4 py-5 shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)] fixed top-0 left-0 w-full">
       <div className="left-part w-[320px] flex justify-between items-center relative">
        <Logo/>
        <div className="search flex items-center bg-[#F0F2F5] px-4 py-2 rounded-full" onClick={()=>{setShow(true)}}>
            <Search color="#65676B"/>
            <input type="text" className='focus:outline-none ml-2 bg-[#F0F2F5] font-primary text-base' placeholder='#Explore' onClick={()=>{setShow(true)}}/>
        </div>

        {
            show &&
             <div className='absolute top-[-12px] left-[-12px]' ref={clickOutside}>
                <Searchbox setShow={setShow}/>
            </div>
        }

       </div>
       <div className="right-part w-[450px] flex items-center justify-between">
       <div>
        <Link className='ml-2 flex items-center bg-[#F1F4F7] w-[120px] px-4 py-2 rounded-full box-border' to="/">
            <HomeActive/>
            <span className='inline-block ml-2 font-primary text-lg text-black'>Home</span>
        </Link>
       </div>
        <div className='relative' ref={outsideClick}>
            <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#F0F2F5] cursor-pointer' onClick={()=>{setMenushow((prev)=>!prev)}}>
                <Menu/>
            </div>
            <div className="absolute top-[50px] cursor-auto left-[-430px]">
                {
                    menushow &&
                    <MenuOption/>
                }
            </div>
        </div>
        <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#F0F2F5] cursor-pointer'>
            <Messenger/>
        </div>
        <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-[#F0F2F5] cursor-pointer relative'>
            <Notifications/>
            <span className='absolute top-[0px] right-[6px] w-[20px] h-[20px] bg-red rounded-full text-center text-white font-primary text-sm font-medium'>5</span>
        </div>
        <div className=' flex items-center justify-between bg-[#F1F4F7] rounded-full px-4 py-2 cursor-pointer relative'>
            <div className='w-[30px] h-[30px] rounded-full bg-white overflow-hidden'></div>
            <span className='inline-block ml-3 text-base font-primary text-black whitespace-nowrap w-[74px] overflow-hidden text-ellipsis'>{users?.fName}</span>
            <div>
                <ArrowDown/>
            </div>
            <div className='absolute top-[50px] cursor-auto left-[-196px]'>
                <Usermenu/>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Header