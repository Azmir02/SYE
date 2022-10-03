import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createUser } from '../../features/users/userSlice';
import { LoginUser } from '../../features/users/loginUser';
import Logo from '../../svg/logo'

const Resetpass = ({users,loading,userInfos}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem('user')
        dispatch(createUser(null))
        dispatch(LoginUser(null))
        navigate('/login')
    }


   
  return (
    <>
    <Helmet>
        <title>Reset Password</title>
    </Helmet>
    <div className='h-screen bg-gradient-to-br from-purple-100 to-pink-100 via-cyan-100'>
        <div className='py-3 px-4 bg-white flex justify-between items-center shadow-[0px_24px_50px_rgba(0,_0,_0,_0.1)]'>
            <div>
                <Logo/>
            </div>
            <div className='w-[150px] text-right'>
                {
                    users ?
                    <div className='flex items-center justify-between'>
                        <Link to="/profile">
                            <div className='w-12 h-12 rounded-full bg-secondary_color'>
                            {/* for user image now its blank */}
                            </div>
                        </Link>
                        <div>
                            <button onClick={handleLogout} className='bg-primary_color px-5 py-2 rounded-md font-primary font-normal text-base  text-white' type='submit'>Log out</button>
                        </div>
                    </div>
                    :
                    <Link to="/login" className='bg-primary_color px-5 py-2 rounded-md font-primary font-normal text-base  text-white' type='submit'>Log in</Link>
                }
            </div>
        </div>
        <div className='h-[80vh] flex justify-center items-center px-5'>
            <div className='px-8 py-4 rounded-md bg-white min-w-[320px] w-[520px]'>
                <h2 className='font-primary font-medium text-2xl text-black'>Reset Your Password</h2>
                <div className='w-full h-[1px] bg-[#F0F2F5] mt-2'></div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div>
                        <p className='font-primary font-normal text-base text-title_color mt-2'>How do you want to recive the code to reset your password ?</p>
                        <label htmlFor="email" className='radio cursor-pointer mt-3 flex items-center'>
                            <div className='mr-4'>
                                <input type="radio" className='radio-input'  checked/>
                                <div className='radio_radio'></div>
                            </div>
                            <div>
                                <span className='font-primary text-base text-title_color font-normal block'>Send code via email</span>
                                <span className='font-primary text-base text-title_color font-normal'>{userInfos.email}</span>
                            </div>
                        </label>
                    </div>
                    <div className='text-center'>
                        <div className='w-[100px] h-[100px] rounded-full bg-title_color mx-auto my-2'>
                            {/* <img src={userInfos.picture} alt="profilepicture" /> */}
                        </div>
                        <span className='font-primary text-base text-title_color font-normal'>{userInfos.email}</span>
                        <span className='font-primary text-base text-title_color font-normal block'>Facebook user</span>
                    </div>
                </div>
               <div className='text-center md:text-right'>
                    <Link to="/login">
                        <button className='bg-[#F0F2F5] p-3 md:px-5 md:py-2 mt-5 rounded-md font-primary font-normal text-sm md:text-base text-title_color mr-3' type='button'>Not You ?</button>
                    </Link>
                    <button className='bg-primary_color p-3 md:px-5 md:py-2 mt-5 rounded-md font-primary font-normal text-sm md:text-base text-white' type='submit'>Continue</button>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Resetpass