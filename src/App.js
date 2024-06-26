import {Routes, Route, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserCard from './components/userProfileCard/UserCard';
import './App.css'
import CardApp from './components/card/Base';
import CreateWorkout from './components/singlecards/CreateWorkout';
import CreateRoutines from './components/singlecards/CreateRoutine';
import EditRoutines from './components/singlecards/EditRoutine';
import StartSet from './components/singlecards/Set';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [routines, setRoutines] = useState(null);
  const [userData, setUserData] = useState(null);

  //use useNavigate to change pages in our app
  const navigate = useNavigate();

  //set URL for server
  const URL = "https://work-out-app-backend-2f34898d7848.herokuapp.com/api/";

  //define what should happen when a user signs up
  const getRoutines = async(id) => {
    //send the user's info to our server
    id = localStorage.userID;
    // console.log("my id is", id);
    // console.log(token)
    const response = await fetch(URL + `user/${id}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization" : localStorage.getItem("authoToken")
      }
    })
    //get response from the server
    const data = await response.json();
    console.log(data)
    setRoutines(data);
    //navigate to the login page
    navigate("/home")
  }

  const getUserData = async(id) => {
    id = localStorage.userID;
    console.log(id)
    const response = await fetch(URL + `userdata/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization" : localStorage.getItem("authoToken")
      }
    })
    console.log(response)
    const data = await response.json();
    console.log(data)
    setUserData(data);
    navigate("/home")
  }


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
    const data = await response.json();

    //if the login is successful save the token and set isLoggedIn to true
    if(response.status !== 200 ) {
      //setIsLoggedIn(true);
      return data;
    }
      //save this item in the browser's storage for easy future retrieval
      localStorage.setItem("authoToken", data.token);
      localStorage.setItem("userID", data.id);
      localStorage.setItem("userName", data.username)
      setIsLoggedIn(true);
      navigate("/home");
  }

    const handleLogout = () => {
      localStorage.removeItem("authoToken");
      localStorage.removeItem("userID");
      localStorage.removeItem("userName");
      setIsLoggedIn(false);
      navigate('/home')
    }

    useEffect(()=> {
      //UI remains upon refresh depending on isLoggedIn
      let token = localStorage.getItem("authoToken");
      
      if(!token){
        setIsLoggedIn(false);
      } else {
        getUserData(localStorage.getItem("userID"))
        getRoutines(localStorage.getItem("userID"));
        console.log(routines);
        console.log(userData)
        setIsLoggedIn(true);
      }

    }, []);

  

  return (
    <div className="App">
        <Navbar handleLogin={handleLogin} handleSignUp={handleSignUp} handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path={ `/home` } element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path={ `/routines` }  element={<CardApp isLoggedIn={isLoggedIn} routines={routines}/>}/> 
        <Route path='/userProfile' element={<UserCard isLoggedIn={isLoggedIn} inData={userData}/>}/> 
        <Route path='/createroutines' element={<CreateRoutines />}/>
        <Route path='/createworkout' element={<CreateWorkout />}/>
        <Route path='/editroutine' element={<EditRoutines />}/>

        <Route path='/startset' element={<StartSet />}/>
      </Routes>
      
    </div>
  );
}

export default App;
