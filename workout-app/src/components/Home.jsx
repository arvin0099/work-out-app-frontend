import React from 'react'
import Navbar from './Navbar';

const Home = ({handleLogin, handleSignUp}) => {
  return (
    <div>
        <Navbar handleLogin={handleLogin} handleSignUp={handleSignUp} />
    </div>
  )
}

export default Home;
