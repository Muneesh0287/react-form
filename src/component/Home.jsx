import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <h3>Welcome to login Page</h3>
    <div class="collapse navbar-collapse" id="navbarText">
   
      <span class="navbar-text mx-5">
       <Link to={'/login'}>Logout</Link>
      </span>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Home;
