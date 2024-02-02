import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';

const Register = () => {
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [number, setNumber]=useState("")
    const [password, setPassword]=useState("")
    const [cpassword, setCpassword]=useState("")

    const getData=async(e)=>{
        e.preventDefault();
        if (validation()) {
        try
        {
            const responce=await axios.post("http://localhost:3001/users" , {username,email,number,password,cpassword});
            console.log("sucess" , responce.data);
            toast.success('Success')
        }
        catch(error){
            console.error("fail" , error);
            toast.error('fail')
        }
        // setPrint(true)
      }
    }
    const validation = () => {
      let result = true;

      if (username === '' || username === null) {
          result = false;
          toast.warning('please Enter Username');
      }
      if (email === '' || email === null) {
          result = false;
          toast.warning('please Enter Username');
      }
      if (number === '' || number === null) {
          result = false;
          toast.warning('please Enter Username');
      }

      if (password === '' || password === null) {
          result = false;
          toast.warning('please Enter password');
      }

      return result;
  };
    

  return (
    <div style={{width:'400px'}} className='container'>
      <div className="container">
      <h3>Registration form</h3>
      </div>
    <form onSubmit={getData}>
    <div class="mb-3">
      <label  class="form-label">User Name</label>
      <input type="username"
       class="form-control"
        id="exampleInputEmail1"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        
    </div>
    <div class="mb-3">
      <label  class="form-label">User Email</label>
      <input type="username"
       class="form-control"
        id="exampleInputEmail1"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        
    </div>
    <div class="mb-3">
      <label  class="form-label">User Number</label>
      <input type="Number"
       class="form-control"
        id="exampleInputEmail1"
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
        />
        
    </div>
    <div class="mb-3">
      <label  class="form-label">Password</label>
      <input type="password" 
      class="form-control" 
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    
    <div class="mb-3">
      <label  class="form-label">Confirm Password</label>
      <input type="password" 
      class="form-control" 
       value={cpassword}
       onChange={(e)=>setCpassword(e.target.value)}
      />
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
    <Link class="btn btn-primary mx-2" to={'/login'} >Back</Link>
  </form>
  </div>
  )
}

export default Register
