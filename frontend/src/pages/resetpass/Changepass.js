import React from 'react'
import * as Yup from 'yup'
import { Helmet } from 'react-helmet-async'
import { useFormik } from 'formik'
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createUser } from '../../features/users/userSlice';
import { LoginUser } from '../../features/users/loginUser';
import Logo from '../../svg/logo'
import axios from 'axios'

const Changepass = ({setVisible,users,setError,error,setLoading,userInfos}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem('user')
        dispatch(createUser(null))
        dispatch(LoginUser(null))
        navigate('/login')
    }

    let initialValues = {
        password    : '',
        conf_password   : ''
      }

    const newPassword = Yup.object({
        password: Yup.string().min(8).required("Please Enter Password"),
        conf_password: Yup.string().required("Confirm Your Password").oneOf([Yup.ref('password')],"Password must be matched")
    })

    const {email} = userInfos;

    const handleChangepassword = async()=>{
        try {
            setLoading(true)
            await axios.post('/api/changepassword',{
                email,
                password:formik.values.password
            })
            setLoading(false)
            setError('')
            navigate('/')
        } catch (error) {
            setLoading(false)
            setError(error.response.data.message)
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: newPassword,
        onSubmit: async () => {
         handleChangepassword()
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
                <h2 className='font-primary font-medium text-2xl text-black'>Change Password</h2>
                <div className='w-full h-[1px] bg-[#F0F2F5] mt-2'></div>
                <p className='font-primary font-normal text-base text-title_color mt-2'>Pick a strong password.</p>
            <form onSubmit={formik.handleSubmit}>

              <input 
              className='w-full p-3 mt-5 rounded-md border border-solid border-[#F0F2F5] font-primary text-sm focus:outline-0 mb-3' 
              type="password" 
              placeholder='New password' 
              autoComplete='off'
              name="password" 
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} />

              {formik.errors.password  && formik.touched.password ? <p className='text-red font-primary text-base font-normal leading-[0.8]'>{formik.errors.password}</p> : null}

              <input 
              className='w-full p-3 mt-3 rounded-md border border-solid border-[#F0F2F5] font-primary text-sm focus:outline-0 mb-3' 
              type="password" 
              placeholder='Confirm password' 
              autoComplete='off'
              name="conf_password" 
              value={formik.values.conf_password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange} />

              {formik.errors.conf_password  && formik.touched.conf_password ? <p className='text-red font-primary text-base font-normal'>{formik.errors.conf_password}</p> : null}
              
              <div className='w-full h-[1px] bg-[#F0F2F5] mt-2'></div>

                <Link to="/login">
                    <button className='bg-[#F0F2F5] p-3 md:px-5 md:py-2 mt-5 rounded-md font-primary font-normal text-sm md:text-base text-title_color mr-3' type='button'>Cancle</button>
                </Link>
              <button className='bg-primary_color p-3 md:px-5 md:py-2 mt-4 rounded-md font-primary font-normal text-sm md:text-base text-white' type='submit'>Continue</button>
            </form>
            {error && <p className='text-red font-primary font-normal mt-5 text-lg'>{error}</p>}
            </div>
        </div>
    </div>
    </>
  )
}

export default Changepass