import React, { useState } from 'react'
import CardTitle from '../card/CardTitle'
import CardBody from '../card/CardBody'
import { useNavigate, useLocation } from 'react-router-dom'

const StartSet = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const set = state.content
    console.log(set)
    const [currentSet, setCurrentSet] = useState(1)
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
    console.log(currentExerciseIndex)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [workoutComplete, setWorkoutComplete] = useState(false)
    const currentExercise = set[currentExerciseIndex]
    console.log(currentExercise)
    const totalSets = currentExercise.sets
    const totalExercises = set.length
    console.log(totalExercises)

    const handleNextSet = () => {
        if (currentSet === totalSets && currentExerciseIndex === totalExercises - 1) {
            setButtonDisabled(true)
            setWorkoutComplete(true)
            setTimeout(() => {
                setButtonDisabled(false)
            }, 2000)
            return
        }

        if (currentSet < totalSets) {
            setCurrentSet(currentSet + 1)
        } else if (currentExerciseIndex < totalExercises - 1) {
            setCurrentExerciseIndex(currentExerciseIndex + 1)
            setCurrentSet(1)
        }
    }

    const workOutDone = () => {
        navigate('/routines')
    }

    let buttonText = 'Next Set'
    if (workoutComplete) {
        buttonText = 'Go Back to Workouts'
    } else if (currentSet === totalSets && currentExerciseIndex === totalExercises - 1) {
        buttonText = 'Finish Workout'
    } else if (currentSet === totalSets) {
        buttonText = 'Next Exercise'
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-300">
            <div style={{ width: '450px', height: '620px' }} className="flex flex-col justify-between bg-white shadow-xl rounded-lg p-4">
                <CardTitle text={currentExercise.name} />
                <CardBody>
                    <ul className="flex flex-col w-full">
                        <li className='divider text-xl'>
                            Sets: {currentExercise.sets}, Reps: {currentExercise.reps}, Weight: {currentExercise.weight} lbs
                        </li>
                    </ul>
                </CardBody>
                {workoutComplete ? (
                    <h1 className="text-center text-2xl font-bold py-4 text-blue-600">
                        Congratulations on finishing your workout today!
                    </h1>
                ) : (
                    <div className="text-center text-2xl font-bold py-4 text-black">
                        Set {currentSet} out of {totalSets}
                    </div>
                )}
                <button
                    onClick={workoutComplete ? workOutDone : handleNextSet}
                    disabled={buttonDisabled}
                    className={`btn ${buttonDisabled ? 'btn-disabled' : 'btn-blue-500'} w-full mt-4 p-2 rounded text-white`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default StartSet;
