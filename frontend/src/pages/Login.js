import React,{useState} from 'react'
import { useFormik } from 'formik'
import avatar from '../avater.png'
import {NavLink,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {signIn} from '../validation/index'
import {BiErrorCircle} from 'react-icons/bi'
import { LoginUser } from '../features/users/loginUser';
import DotLoader from "react-spinners/DotLoader";
import DotShape from '../svg/dotShape';
import axios from 'axios';

let initialValues = {
  email : '',
  password : ''
}

const Login = () => {

  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const [failed,setFailed] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginUser = async ()=>{
    setLoading(true)
    try{
     let {data} = await axios.post("/api/login",{
       email : formik.values.email,
       password : formik.values.password,
       }) 
       setLoading(false)
       setFailed('')
      setTimeout(()=>{
       dispatch(LoginUser(data))
       localStorage.setItem('user',JSON.stringify(data))
       navigate('/');
      },100)
    }
    catch(err){
     setLoading(false)
     setError(err.response.data.message)
    }
 }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signIn,
    onSubmit: async () => {
      loginUser()
    },
  });


  return (
    <div className='min-h-screen flex items-center justify-center bg-main_bg relative'>
       <div className='absolute bottom-7 left-7'>
      <DotShape/>
    </div>
    <div className='absolute top-7 right-7'>
      <DotShape/>
    </div>
        <form className='w-[350px]' onSubmit={formik.handleSubmit}>
          <div className='avatar w-20 h-20 m-auto mb-5 overflow-hidden border-2 border-primary_color border-solid rounded-full bg-secondary_bg'>
            <picture>
              <img className='m-auto mb-4 mt-[12px]' src={avatar} alt="avatar" />
            </picture>
          </div>
          <input 
            className='w-full p-3 rounded-md bg-secondary_bg font-primary text-sm focus:outline-0 text-white mb-5' type="email" 
            placeholder='Email' 
            autoComplete='off'
            name="email" 
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} />

            {formik.errors.email  && formik.touched.email ? <p className='text-red mb-2 font-primary text-base font-normal'>{formik.errors.email}</p> : null}

          <input 
            className='w-full p-3 rounded-md bg-secondary_bg font-primary text-sm focus:outline-0 text-white mb-5' type="password" 
            placeholder='New Password'
            autoComplete='off' 
            name='password' 
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} />

            {formik.errors.password  && formik.touched.password ? <p className='text-red mb-2 font-primary text-base font-normal'>{formik.errors.password}</p> : null}

          <div className='text-center'>
            <button className='bg-primary_color px-8 py-3 mt-5 rounded-md font-primary font-normal text-base transition ease-linear duration-150 hover:shadow-[0px_0px_27px_rgba(80,_147,_243,_0.72)] text-white' type='submit'>Sign In</button>
          </div>
            <DotLoader className='m-auto mt-2' color="#D17274" loading={loading} size={30} />
          {error && <p className='text-red mb-2 font-primary text-lg font-normal text-center mt-3'><BiErrorCircle style={{display: "inline-block"}}/> {error}</p> }
          {failed && <p className='text-red mb-2 font-primary text-xl font-normal text-center mt-3'><BiErrorCircle style={{display: "inline-block"}}/> {failed}</p> }
        
          <p className='singin text-white font-primary text-lg mt-7 text-center'>Don't have an account? <NavLink className="text-primary_color hover:underline" to="/register">Create Now</NavLink></p>
        </form>
    </div>
  )
}

export default Login