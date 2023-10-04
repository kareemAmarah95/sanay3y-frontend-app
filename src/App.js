import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar"
import AsideNavbar from "./components/AsideNavbar"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import axios from "axios";

axios.defaults.baseURL= 'http://localhost:8080'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Register /> */}
        <Navbar/>
        <Routes>  
          <Route path="/" element={<AsideNavbar/>}/>
          <Route path="/Register" element={<Register />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
        
        {/* <Login /> */}
      </Router>
      
    </div>
  );
}

export default App;
