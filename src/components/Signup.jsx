import React from 'react';
import { useState } from "react"; 

const Signup = (props)=>{

    //create a place to store our form data like username and email
    const [form, setForm] = useState(null);
    console.log(props);

    //define what should happen when the form is submitted
    const handleSubmit = (e) => {
        //prevent page from refreshing on submit
        e.preventDefault();
        //tell the server about our new account details
        props.handleSignUp(form);
    }

    //define what happens when we change something in the form
    const handleChange = (e) => {
        //update the form with new value
        setForm({...form, [e.target.name]: e.target.value});
    }
  
    return (
        <div className = "form-container">
            <h1>SIGN UPs</h1>
            <form onSubmit={handleSubmit}>
                
                    <label className="input input-bordered flex items-center gap-2" htmlFor="username">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" name="username" onChange={handleChange}/>
                    </label>

                    <label className="input input-bordered flex items-center gap-2" htmlFor="email">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input type="email" name="email" onChange={handleChange}/>
                    </label>

                    <label className="input input-bordered flex items-center gap-2" htmlFor="password">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input type="password" name="password" autoComplete="true" onChange={handleChange}/>
                    </label>
               
                    <label className="form-control w-full max-w-s " htmlFor="bodyweight">
                    {/*<label className="input input-bordered flex items-center gap-2" htmlFor="bodyweight">*/}
                        <div className="label">
                            <span className="label-text">Optional</span>
                        </div>
                        <input type="text" name="bodyWeight" placeholder="Body weight" onChange={handleChange}/>
                    </label>
                
                    <label className="input input-bordered flex items-center gap-2" htmlFor="birthday">
                    <input type="date" name="DOB" onChange={handleChange}/>
                    </label>
                    


                <input type="submit" value="Sign up"/>
            </form>
        
        </div>
    )
}

export default Signup
