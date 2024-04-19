import React, { useState } from 'react';
import CardTitle from '../card/CardTitle';
import CardBody from '../card/CardBody';

const CreateWorkout = () => {
    const [workout, setWorkout] = useState([])
    const [newExercise, setNewExercise] = useState({ name: '', sets: '', reps: '', weight: '' })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewExercise(prev => ({ ...prev, [name]: value }))
    }

    const createWorkout = () => {
        console.log('Saving workout:', workout)
    }
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
            <div style={{ width: '450px', height: 'auto' }} className="bg-white shadow-xl rounded-lg p-4">
                <CardTitle text="Create Workout" />
                <CardBody>
                    <input
                        type="text"
                        placeholder="Exercise Name"
                        name="name"
                        value={newExercise.name}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white"
                    />
                    <input
                        type="number"
                        placeholder="Sets"
                        name="sets"
                        value={newExercise.sets}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white"
                    />
                    <input
                        type="number"
                        placeholder="Reps"
                        name="reps"
                        value={newExercise.reps}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white"
                    />
                    <input
                        type="number"
                        placeholder="Weight in lbs"
                        name="weight"
                        value={newExercise.weight}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mb-2 text-white"
                    />
                </CardBody>
                <button onClick={createWorkout} className="btn btn-blue-500 w-full mt-4 p-2 rounded text-white">
                    Create Workout
                </button>
            </div>
        </div>
    )
}

export default CreateWorkout;
