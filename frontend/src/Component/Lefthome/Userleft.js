import React from 'react'
import Leftoption from './Leftoption'
import { useSelector } from 'react-redux'
import Leftprofile from './Leftprofile'

const Userleft = () => {
  const users = useSelector((users)=>(users.login.loggedin))
  return (
    <>
      <Leftprofile user={users}/>
      <Leftoption/>
    </>
  )
}

export default Userleft