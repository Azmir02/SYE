import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const Activate = ({type,head,text,loading}) => {
  return (
    <div className='fixed z-[9999] top-0 left-0 w-full h-screen flex items-center justify-center bg-[rgba(255,_255,_255,_0.6)]'>
        <div className='w-[400px] rounded-md bg-white p-4 text-center'>
            <h3 className={`${type === 'success'? 'text-green' : 'text-red'} font-primary text-base font-medium border-b border-solid border-[#E2E2E2] pb-2`}>{head}</h3>
            <h5 className='font-primary text-lg font-medium mt-5'>{text}</h5>
            <PuffLoader className='m-auto mt-2' loading={loading} color='#21D997' size={40}/>
        </div>
    </div>
  )
}

export default Activate