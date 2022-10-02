import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Notloggedin () {
    const users = useSelector((users)=>(users.login.loggedin))
    return users ? <Navigate to = "/"/> : <Outlet/>
}