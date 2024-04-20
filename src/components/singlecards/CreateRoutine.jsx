import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardTitle from '../card/CardTitle';
import CardBody from '../card/CardBody';

const CreateRoutines = () => {
    const [newRoutine, setNewRoutine] = useState({ name: '', day: [] })
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRoutine(prev => ({ ...prev, [name]: value }))
    }

    const handleDayChange = (e) => {
        const selectedDays = Array.from(e.target.selectedOptions, option => option.value)
        setNewRoutine(prev => ({ ...prev, day: selectedDays }))
    }

    const userId = localStorage.getItem("userID")

    const createRoutines = async () => {
        console.log(newRoutine)
        const URL = `http://localhost:4000/api/user/${userId}/routine`
        try {
            const response = await fetch(URL, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("authoToken")}`
                },
                body: JSON.stringify(newRoutine)
            });
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || "Unknown error");
            }
            navigate('/routines')
        } catch (error) {
            console.error('Failed to update user:', error);
            throw error
        }
    }


    const handleCancel = () => {
        navigate('/routines')
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
            <div style={{ width: '450px', height: 'auto' }} className="bg-white shadow-xl rounded-lg p-4">
                <CardTitle text="Create Routine" />
                <CardBody>
                    <input
                        type="text"
                        placeholder="Routine Name"
                        name="name"
                        value={newRoutine.name}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white bg-slate-600"
                    />
                    Select the days of your workout
                    <select
                        multiple
                        name="day"
                        value={newRoutine.day}
                        onChange={handleDayChange}
                        className="select select-bordered w-full mb-2 text-white bg-slate-600"
                        size="7"
                    >
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                            <option key={day} value={day}>{day}</option>
                        ))}
                    </select>
                </CardBody>
                <button
                    onClick={createRoutines}
                    className="btn btn-blue-500 w-full mt-4 p-2 rounded text-white"
                >
                    Create Routine
                </button>
                <button
                    onClick={handleCancel}
                    className="btn btn-red-500 w-full mt-2 p-2 rounded text-white bg-red-700"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default CreateRoutines
