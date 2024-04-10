import React from 'react';
import Login from './Login';
import Signup from './Signup';

function Navbar(props) {
  return (
    <>
   

        <Login props={props}/>
        <Signup props={props}/>
      
    </>
  )
}

export default Navbar
