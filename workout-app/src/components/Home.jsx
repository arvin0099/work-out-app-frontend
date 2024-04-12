import React from 'react'
import Navbar from './Navbar';
import CardApp from './card/Base';

const Home = ({handleLogin, handleSignUp, isLoggedIn}) => {
  return (
    <div>
        <Navbar handleLogin={handleLogin} handleSignUp={handleSignUp} isLoggedIn={isLoggedIn}/>
        {isLoggedIn ? <CardApp /> : <></>}
        
    </div>
  )
}

export default Home;
