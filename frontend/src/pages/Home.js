import React from 'react'
import Header from '../Component/Header/Header'
import { Helmet } from "react-helmet-async";
import Userleft from '../Component/Left_home/Userleft/Userleft';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>SYE</title>
      </Helmet>

      <Header/>
      <div className='pages'>
        <div className='grid grid-cols-[1fr,3fr,1fr] gap-4 py-5 pl-4 mt-[69px]'>
          <div>
            <Userleft/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home