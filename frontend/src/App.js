import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import './styles/icons/icons.css'
import Loggedinuser from "./Routers/Loggedinuser"; 
import Activepage from "./pages/Activepage";
import Notloggedin from "./Routers/Notloggedin";
import Finduser from "./pages/resetpass/Finduser";

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Loggedinuser/>}>
          <Route path="/" element={ <Home/>}/>
          <Route path="/activate/:token" element={ <Activepage/>}/>
        </Route>
        <Route element={<Notloggedin/>}>
          <Route path="/login" element={ <Login/>}/>
        </Route>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/register" element={ <Registration/>}/>
        <Route path="/reset" element={ <Finduser/>}/>
      </Routes>
    </div>
  );
}

export default App;
