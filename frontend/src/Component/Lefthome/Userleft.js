import React from 'react'
import Leftoption from './Leftoption'
import { useSelector } from 'react-redux'
import Leftprofile from './Leftprofile'

const Userleft = () => {
  const users = useSelector((users)=>(users.login.loggedin))
  return (
    <div>
      <Leftprofile user={users}/>
      <Leftoption/>
    </div>
  )
}

export default Userleft