import React, { useRef } from 'react';
import { Link } from "react-router-dom"

import Login from './Login';
import Signup from './Signup';


function Navbar({handleLogin, handleSignUp, isLoggedIn, handleLogout}) {

    const myModalRef = useRef(null);
    if(localStorage.userID){
        console.log(localStorage);
    }

    const menu = (
        <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/routines">Routines</Link>
                    </li>
                    <li>
                        <Link to="/userProfile">User Profile</Link>
                    </li>
                </ul>
            </div>
    )

  return (
    <>

    <div className="navbar bg-base-200">
        <div className="navbar-start">
            {isLoggedIn ? menu : <></>}
            <div className="flex-none">
            {localStorage.userName ? <span> Welcome {localStorage.userName} </span> : ""}
            </div>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Fitness App</a>
        </div>
        <div className="navbar-end">
            
            {/*Modal button and modal box for login*/}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {!isLoggedIn ? <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Log-in</button>: ""}
            {isLoggedIn ? <button className="btn" onClick={handleLogout}>Logout</button> : ""}
            <dialog id="my_modal_1" className="modal" ref={myModalRef}>
                <div className="modal-box">
                    
                    <Login handleLogin={handleLogin} myModalRef={myModalRef}/> 
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


            {/*Modal button and modal box for signup*/}
            {!isLoggedIn ?<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Sign-up</button>: ""}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    {<Signup handleSignUp={handleSignUp}/>}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    </div>

    </>
  )
}

export default Navbar
