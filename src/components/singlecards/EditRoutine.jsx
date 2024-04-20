import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CardTitle from '../card/CardTitle';
import CardBody from '../card/CardBody';

const EditRoutines = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [routine, setRoutine] = useState({ name: state.routine.name, day: state.routine.day });
    console.log(state.routine._id)

    // setRoutine({ name: state.routine.name, day: [] })
    const routineId = state.routine._id
    const userId = localStorage.getItem("userID")

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRoutine(prev => ({ ...prev, [name]: value }));
    };

    const handleDayChange = (e) => {
        const selectedDays = Array.from(e.target.selectedOptions, option => option.value);
        setRoutine(prev => ({ ...prev, day: selectedDays }));
    };

    const updateRoutine = async () => {
        console.log(routine);
        const URL = `https://work-out-app-backend-2f34898d7848.herokuapp.com/api/user/${userId}/routine/${routineId}`
        console.log(URL)
        try {
            const response = await fetch(URL, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("authoToken")}`
                },
                body: JSON.stringify(routine)
            })
            const data = await response.json()
            console.log(data)
            if (!response.ok) {
                throw new Error(data.message || "Unknown error during update.")
            }
            navigate('/routines')
        } catch (error) {
            console.error('Failed to update routine:', error)
        }
    }

    const handleDelete = async () => {
        const URL = `https://work-out-app-backend-2f34898d7848.herokuapp.com/api/user/${userId}/routine/${routineId}`
        try {
            const response = await fetch(URL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("authoToken")}`
                }
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Unknown error during deletion.")
            }
            navigate('/routines');
        } catch (error) {
            console.error('Failed to delete routine:', error)
        }
    }

    const handleCancel = () => {
        navigate('/routines')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
            <div style={{ width: '450px', height: 'auto' }} className="bg-white shadow-xl rounded-lg p-4">
                <CardTitle text="Edit Routine" />
                <CardBody>
                    <input
                        type="text"
                        placeholder="Routine Name"
                        name="name"
                        value={routine.name}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white bg-slate-600"
                    />
                    Select the days of your workout
                    <select
                        multiple
                        name="day"
                        value={routine.day}
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
                    onClick={updateRoutine}
                    className="btn btn-blue-500 w-full mt-4 p-2 rounded text-white"
                >
                    Update Routine
                </button>
                <button
                    onClick={handleCancel}
                    className="btn btn-red-500 w-full mt-2 p-2 rounded text-white bg-red-700"
                >
                    Cancel
                </button>
                <button
                    onClick={handleDelete}
                    className="btn btn-red-500 w-full mt-10 p-2 rounded text-white bg-red-900"
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default EditRoutines;
