import React, { useState } from "react"
import { updateUser } from "../UpdateUser"

const UCardBack = ({flipToFront, user, handleUserUpdate}) => {
    console.log(user)
    const [userData, setUserData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        dob: user.dob,
        weight: user.bodyWeight
    })


    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleCancel = (event) => {
        event.preventDefault()
        flipToFront()
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await handleUserUpdate(userData)
            
        } catch (error) {
            console.error("Update failed:", error.message);
            alert("Failed to update user: " + error.message);
        }
    }

    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-stone-300 rounded-lg shadow-lg transform rotate-y-180 backface-hidden ">
            <h1 className="text-black">Edit user {user.username}</h1>
            <div className="space-y-2">
                <label className="block text-black">
                    First Name:
                    <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} className="input input-bordered w-full text-white" />
                </label>
                <label className="block text-black">
                    Last Name:
                    <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} className="input input-bordered w-full text-white" />
                </label> 
                <label className="block text-black">
                    Weight in lbs:
                    <input type="number" name="weight" value={userData.weight} onChange={handleChange} className="input input-bordered w-full text-white" />
                </label>
                <button className="btn btn-success" onClick={handleSubmit}>Save</button>
                <button className="btn btn-error" onClick={handleCancel}>Cancel</button>
            </div>
            <div className="mt-auto w-full flex justify-start items-end">
                <a href="" className="text-red-600 text-left">**** Revoke Membership ****</a>
            </div>
        </div>
    )
}
    
    


export default UCardBack