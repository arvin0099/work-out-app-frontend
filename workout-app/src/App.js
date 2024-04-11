import {Routes, Route, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css'

import logo from './logo.svg';
import './App.css';

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
    if(response.status !== 200 || !data.token){
      return data;
    }

    //save this item in the browser's storage for easy future retrieval
    localStorage.setItem("authoToken", data.token);
    setIsLoggedIn(true);
    navigate("/");

  }

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home  handleLogin={handleLogin} handleSignUp={handleSignUp}/> }/>
        {/* Route for Routine*/}
        {/* Route for user profile card*/}
      </Routes>
      
    </div>
  );
}

export default App;
