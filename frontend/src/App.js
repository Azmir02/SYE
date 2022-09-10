import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import './styles/icons/icons.css'
import Loggedinuser from "./Routers/Loggedinuser";

function App() {

  return (
    <div>
      <Routes>
        <Route element={<Loggedinuser/>}>
          <Route path="/" element={ <Home/>}/>
        </Route>
        <Route path="/login" element={ <Login/>}/>
          <Route path="/register" element={ <Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
