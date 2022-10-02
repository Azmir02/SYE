import React from 'react'
import * as Yup from 'yup'
import { Helmet } from 'react-helmet-async'
import { useFormik } from 'formik'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createUser } from '../../features/users/userSlice';
import { LoginUser } from '../../features/users/loginUser';
import Logo from '../../svg/logo'

const Resetpass = ({users}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem('user')
        dispatch(createUser(null))
        dispatch(LoginUser(null))
        navigate('/login')
    }

    let initialValues = {
        code : '',
      }

    const userCode = Yup.object({
        code: Yup.string().min("5","Code must be 5 characters").max("5",'Code must be 5 characters').required("Please Enter Verification code"),
    })


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: userCode,
        onSubmit: async () => {
         
        },
      });
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
                <p className='font-primary font-normal text-base text-title_color mt-2'>Please enter code that been sent your account.</p>
            <form onSubmit={formik.handleSubmit}>

              <input 
              className='w-full p-3 mt-5 rounded-md border border-solid border-[#F0F2F5] font-primary text-sm focus:outline-0  mb-5' 
              type="text" 
              placeholder='Enter Code' 
              autoComplete='off'
              name="code" 
              value={formik.values.code}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} />

              {formik.errors.code  && formik.touched.code ? <p className='text-red font-primary text-base font-normal'>{formik.errors.code}</p> : null}
              
              <div className='w-full h-[1px] bg-[#F0F2F5] mt-2'></div>

              <Link to='/login'>
                <button className='bg-[#F0F2F5] p-3 md:px-5 md:py-2 mt-4 rounded-md font-primary font-normal text-sm md:text-base text-title_color mr-3' type='button'>Not you ?</button>
                </Link>
              <button className='bg-primary_color p-3 md:px-5 md:py-2 mt-4 rounded-md font-primary font-normal text-sm md:text-base text-white' type='submit'>Continue</button>
            </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Resetpass