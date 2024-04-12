import React, { useState } from "react"

const UCardBack = ({flipToFront, user}) => {
    const [userData, setUserData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        dob: user.DOB,
        weight: user.bodyWeight
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleCancel = (event) => {
        event.preventDefault()
        flipToFront()
    }

    //This is where the code handles how data will be submitted, this code is not complete yet.
    const handleSubmit = (event) => {
        event.preventDefault()
        event.stopPropagation()
        flipToFront()
        //add code below
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
                    Date of Birth:
                <input type="date" name="dob" value={userData.dob} onChange={handleChange} className="input input-bordered w-full text-white" />
                </label>   
                <label className="block text-black">
                    Weight in lbs:
                    <input type="number" name="weight" value={userData.weight} onChange={handleChange} className="input input-bordered w-full text-white" />
                </label>
                <button className="btn btn-success" onClick={handleSubmit}>Save</button>
                <button className="btn btn-error" onClick={handleCancel}>Cancel</button>
            </div>
            <div className="mt-auto w-full flex justify-start items-end">
                <a className="text-red-600 text-left">**** Revoke Membership ****</a>
            </div>
        </div>
    )
}
    
    


export default UCardBack