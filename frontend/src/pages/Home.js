import React from 'react'
import Header from '../Component/Header/Header'
import { Helmet } from "react-helmet-async";
import Userleft from '../Component/Lefthome/Userleft';
import Friendreq from '../Component/Righthome/Friendrequest/Friendreq';
import Contacts from '../Component/Righthome/Contacts';
import Story from '../Component/Story/Story';
import Post from '../Component/Posts/Post';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>SYE</title>
      </Helmet>

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

export default Home