import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
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
