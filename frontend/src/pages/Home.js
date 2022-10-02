import React from 'react'
import Header from '../Component/Header/Header'
import { Helmet } from "react-helmet-async";
import Userleft from '../Component/Lefthome/Userleft';
import Friendreq from '../Component/Righthome/Friendrequest/Friendreq';
import Contacts from '../Component/Righthome/Contacts';
import Story from '../Component/Story/Story';
import Post from '../Component/Posts/Post';
import Reauth from '../Component/re-authorization/Reauth';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>SYE</title>
      </Helmet>

      <Header/>
      <div className='pages'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr,1fr] xl:grid-cols-[1fr,3fr,1fr] gap-1 xl:gap-2 py-5 pl-1 md:pl-4 mt-[69px]'>
          <div className='hidden lg:block'>
            <Userleft/>
          </div>
          <div className='px-2 md:px-[100px] lg:px-[10px] 2xl:px-[20px] 3xl:px-[200px]'>
            <Story/>
            <Reauth/>
            <Post/>
          </div>
          <div className='pr-3 hidden 2xl:block'>
            <Friendreq/>
            <Contacts/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home