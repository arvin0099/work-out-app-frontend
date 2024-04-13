import React, { useState } from 'react';
import { routines } from '../../../data';
import CardTitle from '../CardTitle';
import CardBody from '../CardBody';

const StartSet = () => {
    const [currentSet, setCurrentSet] = useState(1)
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
    const content = routines[0]
    const currentExercise = content.exercises[currentExerciseIndex]
    const totalSets = currentExercise.sets
    const totalExercises = content.exercises.length

    const handleNextSet = () => {
        if (currentSet < totalSets) {
            setCurrentSet(currentSet + 1);
        } else if (currentExerciseIndex < totalExercises - 1) {
            setCurrentExerciseIndex(currentExerciseIndex + 1)
            setCurrentSet(1)
        }
    }

    const isWorkoutComplete = currentSet === totalSets && currentExerciseIndex === totalExercises - 1

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
                {isWorkoutComplete ? (
                    <h1 className="text-center text-2xl font-bold py-4 text-blue-600">Congratulations on finishing your workout today!</h1>
                ) : (
                    <div className="text-center text-2xl font-bold py-4 text-black">
                        Set {currentSet} out of {totalSets}
                    </div>
                )}
                <button
                    onClick={handleNextSet}
                    className="btn btn-blue-500 w-full mt-4 p-2 rounded text-white"
                    disabled={isWorkoutComplete}
                >
                    {isWorkoutComplete ? 'Go Back to Workouts' : (currentSet === totalSets ? 'Next Exercise' : 'Next Set')}
                </button>
            </div>
        </div>
    )
}

export default StartSet