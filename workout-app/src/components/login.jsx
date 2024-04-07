import React from 'react';
import { useState } from "react";

const login = (props) => {
    
    // Create a place to store our form data, like username and password.
    const [form, setForm] = useState(null);

    // Create a place to store any error messages, like if the login doesn't work.
    const [errorMsg, setErrorMsg] = useState("");

    // Define what should happen when the form is submitted.
    const handleSubmit = async (e) => {
        e.preventDefault(); // This stops the page from refreshing when we submit the form.
        let submission = await props.handleLogin(form);

        // Ask the server if our login details are correct.
        if(submission) {

            // If the server says something is wrong, show the error message.
            setErrorMsg(submission.error);
        }
    }

    // Define what should happen when we change something in the form.
    const handleChange = (e) => {
        
        // Update our form data with the new value.
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div className="form-container">
            <h1>WELCOME GREETING</h1>

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
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleChange}/>
                </span>
                <input type="submit" value="login"/>
            </form>
            {/*add error handler below*/}
        
        </div>
    )
}

export default login
