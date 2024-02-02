// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Home from './component/Home';
// import Login from './component/Login';
import Register from './component/Register';
import { ToastContainer } from "react-toastify";
import Login from './component/Login';
import Formadd from './component/loginForm/Formadd';
function App() {
  return (
    <>
      <div className="App">
      <ToastContainer></ToastContainer>
     {/* <Router>
      <Routes>
     
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='' element={<Home/>}/>
      </Routes>
     </Router> */}
     {/* <Register /> */}
     {/* <Login /> */}
     {/* <Form /> */}
     <Formadd />
    </div>
    </>

  );
}

export default App;
