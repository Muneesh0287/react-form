import React, { useState } from 'react';
import { IoMdCart } from "react-icons/io";
const Navbar = () => {
const[menu , setMenu]=useState('')
  return (
    <div>
      <div className="navbar">
      <div className="nav-logo">
      <img src="" alt="" />
      <p>apna store</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>setMenu("shop")}>shop{menu==="shop"? <hr/> : <></>}</li>
        <li onClick={()=>setMenu("mens")}>Men{menu==="mens"? <hr/> : <></>}</li>
        <li onClick={()=>setMenu("women")}>Women{menu==="women"? <hr/> : <></>}</li>
        <li onClick={()=>setMenu("kids")}>Kids{menu==="kids"? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <a href="/cart"><IoMdCart style={{width:30 , height:30}} /></a>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
