import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setUser } from '../redux/authSlice';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    email:"",
    password:""
  })
  const handleChange = (e) =>{
    const {name, value} = e.target
    setInput((prev)=>({
      ...prev,
      [name]:value,
    }))
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(input);
    try {
      const response = await axios.post('http://localhost:8000/api/v1/user/login', input, {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      })
      if (response.data.success) {
        navigate('/')
        dispatch(setUser(response.data.user))
        
        toast.success(response.data.message);
      } else {
        
        toast.error("Login failed: " + response.data.message);
      }
    } catch (error) {
      // console.log(error)
      if (error.response && error.response.data && error.response.data.message) {
        toast.error("Login failed: " + error.response.data.message);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  }
  return (
    <>
      <div className="Signup-container">
        <div className="signup-box">
          <h2 style={{textAlign: "center"}}>Welcome Back</h2>
          <p style={{textAlign: "center"}}>Please Login in to your Account</p>
          <form>
            
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                name="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter a Password"
                value={input.password}
                onChange={handleChange}
                id="password"
                name="password"
              />
            </div>
           
            <button onClick={handleSubmit} type="submit" className="btn btn-primary signup ">
              Login
            </button>
            <div className="mb-3">
              <p className='my-3' style={{textAlign: "center"}}>Don't have an account? <Link to='/Signup'>Sign UP</Link></p>
            </div>
          </form>
        </div>

      </div>
    </>
  );
};

export default Login;


