import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import User from './pages/User';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/user' element={<User />}/>

      </Routes>
    </BrowserRouter>
      

  );
}

export default App;
