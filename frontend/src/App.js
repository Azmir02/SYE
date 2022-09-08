import { Routes,Route,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import './styles/icons/icons.css'
import { useEffect } from "react";

function App() {
  const users = useSelector((users)=>(users.login.loggedin))
  const navigate = useNavigate()

  useEffect(()=>{
    if(users){
      navigate('/');
    }
  },[])

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
