import {Routes, Route, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserCard from './components/userProfileCard/UserCard';
import './App.css'

import logo from './logo.svg';
import './App.css';
import CardApp from './components/card/Base';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  //use useNavigate to change pages in our app
  const navigate = useNavigate();

  //set URL for server
  const URL = "http://localhost:4000/api/";

  //define what should happen when a user signs up
  const handleSignUp = async(user) => {
    //send the user's info to our server
    const response = await fetch(URL + "auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user) 
    })
    //get response from the server
    const data = await response.json()
    console.log("handle Signup", data)
    //navigate to the login page
    navigate("/login")
  }

  // define what happens when a user logs in
  const handleLogin = async(user) => {
    //send the user's info to our server
    const response = await fetch(URL + "auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    //get the response from the server
    const data = response.json();

    //if the login is successful save the token and set isLoggedIn to true
    if(response.status !== 200) {
      //setIsLoggedIn(true);
      return data;
    }

    //save this item in the browser's storage for easy future retrieval
    localStorage.setItem("authoToken", data.token);
    setIsLoggedIn(true);
    navigate("/home");
  }

  const handleLogout = () => {
    console.log("in handle log");
    localStorage.removeItem("authoToken");
    localStorage.removeItem("userID");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    navigate('/home')
  }

  useEffect(()=> {
    //UI remains upon refresh depending on isLoggedIn
    let token = localStorage.getItem("authoToken");
    console.log(token);
    if(!token){
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
        <Navbar handleLogin={handleLogin} handleSignUp={handleSignUp} handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path='/home' element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path='/routines' element={<CardApp isLoggedIn={isLoggedIn}/>}/> 
        <Route path='/userProfile' element={<UserCard isLoggedIn={isLoggedIn}/>}/> 
      </Routes>
      
    </div>
  );
}

export default App;
