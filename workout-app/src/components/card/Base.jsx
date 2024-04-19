import React, { useState, useEffect } from 'react'
import Card from './Card'
import { useParams } from "react-router-dom";
import { logDOM } from '@testing-library/react';

const CardApp = ({routines}) => {
  console.log(routines.routines)
  const buttonColor = 'bg-blue-500'
  const [buttonName, setButtonName] = useState('Show Exercises')
  const [addButtonName, setAddButtonName] = useState('Add Routine')
  const [sideButtonName, setsideButtonName] = useState('Start Workout')
  const [currentContent, setCurrentContent] = useState(routines.routines)
  const [displayExercises, setDisplayExercises] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  console.log(routines);
  console.log(routines.routines[0]._id);

  const handleExerciseClick = (routine) => {
    console.log(routine)
    if (routine && routine.exercises) {
      setCurrentContent(routine.exercises)
      setDisplayExercises(true)
      setButtonName('Back to Routines')
      setAddButtonName('Add Exercise')
      setAnimationKey(prevKey => prevKey + 1)
    } else {
      console.error("nothing")
    }
  }

  const handleBackToRoutines = () => {
    setCurrentContent(routines.routines)
    setDisplayExercises(false)
    setButtonName('Show Exercises')
    setAddButtonName('Add Routine')
    setAnimationKey(prevKey => prevKey + 1)
  } 

  if (!currentContent.length || currentContent.length === 0) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-500">
            <div className="text-white text-xl">
                No data available.
            </div>
        </div>
    )
}

return (
  <div className="flex flex-col h-screen bg-slate-500">
    <div className="p-4 text-right">
      <button className="btn bg-blue-500 text-white">
        {addButtonName}
      </button>
    </div>
    <div className="flex-grow flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1 max-w-4xl mx-auto px-4">
        {currentContent.map((content, index) => (
          <div
            key={`${index}-${animationKey}`}
            className="mx-2 my-2 opacity-0"
            style={{
              animation: 'fadeIn 0.5s ease forwards',
              animationDelay: `${index * 0.2}s`
            }}
          >
            <Card
              frontContent={content}
              backContent={content}
              onButtonClick={displayExercises ? handleBackToRoutines : () => handleExerciseClick(content)}
              onSideButtonClick={displayExercises ? handleBackToRoutines : () => handleExerciseClick(content)}
              buttonColor={buttonColor}
              buttonName={buttonName}
              sideButtonName={sideButtonName}
              displayExercises={displayExercises}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)
}


export default CardApp
