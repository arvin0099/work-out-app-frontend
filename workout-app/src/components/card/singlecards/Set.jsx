import React, { useState } from 'react';
import { routines } from '../../../data';
import CardTitle from '../CardTitle';
import CardBody from '../CardBody';

const StartSet = () => {
    const [currentSet, setCurrentSet] = useState(1)
    const totalSets = 3
    console.log(totalSets)

    const content = routines[1]

    console.log(content)

    const handleNextSet = () => {
        if (currentSet < totalSets) {
            setCurrentSet(currentSet + 1)
        }
    }

    return (
        <div style={{ width: '450px', height: '620px' }} className="bg-slate-300 flex flex-col justify-between">
            <div className={`shadow-xl relative w-full flex-1 transition-transform duration-500 transform`}>
                <CardTitle text={content.name.exercises[1].name} />
                <CardBody>
                    {Array.isArray(content.exercises) ? (
                        <ul className="flex flex-col w-full">
                            {content.exercises.map((exercise, index) => (
                                <li key={index} className='divider'>
                                    {exercise.name} - Sets: {exercise.sets}, Reps: {exercise.reps}, Weight: {exercise.weight} lbs
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="flex flex-col w-full">
                            <li className='divider'>No exercises found</li>
                        </ul>
                    )}
                </CardBody>
            </div>
            <div className="text-center text-2xl font-bold py-4">
                Set {currentSet} out of {totalSets}
            </div>
            <button
                onClick={handleNextSet}
                className="btn btn-blue-500 mx-auto mb-4 p-2 rounded text-white"
                disabled={currentSet === totalSets}
            >
                Click for next set
            </button>
        </div>
    );
}

export default StartSet