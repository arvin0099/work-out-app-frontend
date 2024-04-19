import React, { useState, useEffect } from 'react'
import UCardFront from './UCardFrontData'
import UCardBack from './UCardBack'
import { updateUser } from '../UpdateUser'
import { getUserData } from '../GetData'

const UCard = ({isLoggedIn, inData}) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const userId = localStorage.getItem("userID")
    console.log(localStorage.getItem("userID"))

    const getData = async() => {
        try {
            const getDatas = await getUserData(userId)
            setUserData(getDatas)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        console.log('run')
        getData()
    }, [])
    
    const flipToFront = async () => {
        setIsFlipped(false)
        try {
            const updatedUser = await getUserData(userId)
            setUserData(updatedUser)
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    }
    

    const flipToBack = async () => {
        
        setLoading(true)
        try {
            const updatedUser = await getUserData(userId)
            setUserData(prevUserdata => ({
                ...prevUserdata,
                ...updatedUser
            }))
            setLoading(false)
            setIsFlipped(true)
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    }

    const handleUserUpdate = async (updatedUserData) => {
        setLoading(true);
        setError(null);
        try {
            const updatedUser = await updateUser(userData._id , updatedUserData)
            
            setUserData(prevUserdata => ({
                ...prevUserdata,
                ...updatedUser
            }))
            
            setLoading(false)
            flipToFront()
            
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
            <div style={{ width: '642px', height: '420px' }} className="perspective">
                {loading ? (
                    <div className={`shadow-xl relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''}`}>Loading...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : userData ? (
                    <div className={`shadow-xl relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''}`}>
                        <UCardFront user={userData} flipToBack={flipToBack}/>
                        <UCardBack user={userData} handleUserUpdate={handleUserUpdate} flipToFront={flipToFront} />
                    </div>
                ) : (
                    <div>Loading user data...</div>
                )}
            </div>
        </div>
    );
}
export default UCard