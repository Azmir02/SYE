import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Reauth = () => {
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')
    const users = useSelector((users)=>(users.login.loggedin))

    const resendCode = async ()=>{
      try{
        let {data} = await axios.post("/api/reauthorization",{},
        {
          headers:{
            Authorization: `Bearer ${users.token}`
        }
        }
        )
        console.log(data);
        setSuccess(data.message)
      }
      catch(err){
        setError(err.response.data.message)
      }
    }
  return (
    <>
    {
      users.verified === false &&
      <div className='w-full px-4 py-3 bg-white mt-5 rounded-md'>
        <h4 className='font-primary text-black text-sm font-regular'>Your account is not verified. Please verifiy your account before it gets delete after an hour of creating.</h4>
        <button onClick={resendCode} className='font-primary text-blue text-sm font-regular cursor-pointer hover:underline'>Click here to re-send varification link</button>

        {success && <p className='font-primary text-green text-base font-regular'>{success}</p>}
        {error && <p className='font-primary text-red text-base font-regular'>{error}</p>}
      </div>
    }
    </>
  )
}

export default Reauth