import { Outlet } from 'react-router-dom'
import Login from '../pages/Login'
import { useSelector } from 'react-redux'

export default function Loggedinuser () {
    const users = useSelector((users)=>(users.login.loggedin))
    return users ? <Outlet/> : <Login/>
}