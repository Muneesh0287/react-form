import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';


const Login = () => {
    const [username ,setUsername]=useState("")
    const [password ,setPassword]=useState("")
    const apiUrl ="http://localhost:3001/users/"
    const  usenavigate=useNavigate()

    const getData = (e) => {
        e.preventDefault();
        if (validation()) {
        //     // console.log('proceed');
            fetch(apiUrl).then((res)=>res.json())
            .then((users) =>{
              const user =users.find((user)=> user.username === username);
              if(!user){
                toast.error('please Enter Valid username');
              }else{
                if(user.password ===password){
                    toast.success('Success')
                    usenavigate('/')

                }else{
                    toast.error('please Enter Valid credentials');
                }
            }
            }).catch((err)=>{
                toast.error('Login Faild Due to :'+err.message );
            });
        }
    };
    const validation = () => {
        let result = true;

        if (username === '' || username === null) {
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
    <>
    <div style={{width:'400px', marginTop:'90px'}} className='container'>
      <div className="container">
        <h3>Login page</h3>
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
      <label  class="form-label">Password</label>
      <input type="password" 
      class="form-control" 
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
    <Link class="btn btn-primary mx-2" to={'/register'} >New user</Link> 
  </form>
  </div>
    </>
  )
}

export default Login
