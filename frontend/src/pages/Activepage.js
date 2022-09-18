import React from 'react'
import Header from '../Component/Header/Header'
import { Helmet } from "react-helmet-async";
import Userleft from '../Component/Lefthome/Userleft';
import Friendreq from '../Component/Righthome/Friendrequest/Friendreq';
import Contacts from '../Component/Righthome/Contacts';
import Story from '../Component/Story/Story';
import Post from '../Component/Posts/Post';
import Activate from './Activate';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createUser } from '../features/users/userSlice';
import { LoginUser } from '../features/users/loginUser';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';


const Activepage = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  const users = useSelector((users)=>(users.login.loggedin))
  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState("")
  const [error,setError] = useState("")
  const {token} = useParams()

  useEffect(()=>{
    activateUser()
  },[])

const activateUser = async()=>{
  try{
    setLoading(true)
    let {data} = await axios.post('/api/activate',{token},
    {
      headers:{
        Authorization: `Bearer ${users.token}`
    }
  })
    setSuccess(data.message)
    setError('')
    localStorage.setItem('user',JSON.stringify({...users,verified:true}))
    dispatch(createUser({...users,verified:true}))
    dispatch(LoginUser({...users,verified:true}))
    setTimeout(()=>{
      navigate("/")
    },3000)
  }
  catch(err){
    setError(err.response.data.message)
    setTimeout(()=>{
      navigate("/")
    },3000)
  }
}

  return (
    <>
      <Helmet>
        <title>SYE</title>
      </Helmet>

      {
        success && 
        <Activate type="success" head="Account Successfully Activated" text={success} loading={loading}/>
      }

      {
        error && 
        <Activate type="error" head="Account Activation Failed" text={error} loading={loading}/>
      }

      <Header/>
      <div className='pages'>
        <div className='grid grid-cols-[1fr,3fr,1fr] gap-6 py-5 pl-4 mt-[69px]'>
          <div>
            <Userleft/>
          </div>
          <div className='px-[200px]'>
            <Story/>
            <Post/>
          </div>
          <div className='pr-3'>
            <Friendreq/>
            <Contacts/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Activepage