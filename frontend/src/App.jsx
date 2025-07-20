

import './App.css'
import './Ai.css'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/Profile';
import Heroes from './components/Heroes';
import Upload from './components/Upload';
import Tabs from './components/Tabs';
import Ai from './components/Ai';
function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Heroes/></>} />
        <Route path="/Signup" element={<><Header/><SignUp/></>} /> 
        <Route path="/login" element={<><Header/><Login/></>} /> 
        <Route path="/upload" element={<><Header/><Upload/></>} /> 
        <Route path="/profile" element={<><Header/><Profile/></>} /> 
        <Route path="/tabSection" element={<><Header/><Tabs /></>} /> 
        <Route path="/ai" element={<><Header/><Ai/></>}/>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
    </>
  )
}

export default App
