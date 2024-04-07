import React from 'react';
import { useState } from "react"; 

const Signup = (props)=>{

    //create a place to store our form data like username and email
    const [form, setForm] = useState(null);

    //define what should happen when the form is submitted
    const handleSubmit = (e) => {
        //prevent page from refreshing on submit
        e.preventDefault();
        //tell the server about our new account details
        props.handleSignup(form);
    }

    //define what happens when we change something in the form
    const handleChange = (e) => {
        //update the form with new value
        setForm({...form, [e.target.name]: e.target.value});
    }
  
    return (
        <div className = "form-container">
            <h1>SIGN UP</h1>
            <form onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" onChange={handleChange}/>
                </span>
                <span>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" onChange={handleChange}/>
                </span>
                <span>
                    <label htmlFor="password"> Password: </label>
                    <input type="password" name="password" autoComplete="true"/>
                </span>
                <span>
                    <label htmlFor="bodyweight"> Weight: </label>
                    <input type="text" name="bodyWeight"/>
                </span>
                <span>
                    <label htmlFor="birthday">DOB: </label>
                    <input type="date" name="DOB"/>
                </span>

                <input type="submit" value="Sign up"/>
            </form>
        
        </div>
    )
}

export default Signup
