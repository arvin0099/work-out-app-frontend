import React, { useRef } from 'react';
import Login from './Login';
import Signup from './Signup';


function Navbar({handleLogin, handleSignUp, isLoggedIn, handleLogout}) {

    const myModalRef = useRef(null);

  return (
    <>

    <div className="navbar bg-base-100">
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Fitness App</a>
        </div>
        <div className="flex-none">
        {localStorage.userName ? <span> Welcome {localStorage.userName} </span> : ""}
        </div>
        {/*Modal button and modal box for login*/}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {!isLoggedIn ? <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Log-in</button>: ""}
        {!isLoggedIn ? <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Log-in</button> : <button className="btn" onClick={handleLogout}>Logout</button>}
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

    </>
  )
}

export default Navbar
