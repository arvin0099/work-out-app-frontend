import React, { useState, useEffect } from 'react'
import Card from './Card'
import { routines } from '../../data'
import { useParams } from "react-router-dom";

const CardApp = ({}) => {
  const buttonColor = 'bg-blue-500'
  const [buttonName, setButtonName] = useState('Show Exercises')
  const [sideButtonName, setsideButtonName] = useState('Start Workout')
  const [currentContent, setCurrentContent] = useState(routines)
  const [displayExercises, setDisplayExercises] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  const handleExerciseClick = (routine) => {
    if (routine && routine.exercises) {
      setCurrentContent(routine.exercises)
      setDisplayExercises(true)
      setButtonName('Back to Routines')
      setAnimationKey(prevKey => prevKey + 1)
    } else {
      console.error("nothing")
    }
  }

  const handleBackToRoutines = () => {
    setCurrentContent(routines)
    setDisplayExercises(false)
    setButtonName('Show Exercises')
    setAnimationKey(prevKey => prevKey + 1)
  } 

  console.log("base routines", routines); 

  console.log(routines)

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-500">
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
    )
}


export default CardApp
