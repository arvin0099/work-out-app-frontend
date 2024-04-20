import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardTitle from '../card/CardTitle';
import CardBody from '../card/CardBody';

const CreateWorkout = () => {
    const [newExercise, setNewExercise] = useState({ name: '', sets: '', reps: '', weight: '' })
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewExercise(prev => ({ ...prev, [name]: value }))
    }

    const createWorkout = () => {
        console.log('Saving workout:', workout)
    }

    const handleCancel = () => {
        navigate('/routines')
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
            <div style={{ width: '450px', height: 'auto' }} className="bg-white shadow-xl rounded-lg p-4">
                <CardTitle text="Create Workout" />
                <CardBody >
                    <input
                        type="text"
                        placeholder="Exercise Name"
                        name="name"
                        value={newExercise.name}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white bg-slate-600"
                    />
                    <input
                        type="number"
                        placeholder="Sets"
                        name="sets"
                        value={newExercise.sets}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white bg-slate-600"
                    />
                    <input
                        type="number"
                        placeholder="Reps"
                        name="reps"
                        value={newExercise.reps}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white bg-slate-600"
                    />
                    <input
                        type="number"
                        placeholder="Weight in lbs"
                        name="weight"
                        value={newExercise.weight}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white bg-slate-600"
                    />
                </CardBody>
                <button onClick={createWorkout} className="btn btn-blue-500 w-full mt-4 p-2 rounded text-white">
                    Create Workout
                </button>
                <button onClick={handleCancel} className="btn btn-red-500 w-full mt-2 p-2 rounded text-white bg-red-700">
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default CreateWorkout
