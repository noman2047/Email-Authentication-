import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './main.css'


const Main = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Login</Link>
        <Link to='/register'>Regitster</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;