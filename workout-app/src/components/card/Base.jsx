import React, { useState, useEffect } from 'react'
import Card from './Card'
import { useParams } from "react-router-dom";
import { logDOM } from '@testing-library/react';
import { useNavigate } from "react-router-dom"

const CardApp = ({routines}) => {
  const buttonColor = 'bg-blue-500'
  const navigate = useNavigate()
  const [buttonName, setButtonName] = useState('Show Exercises')
  const [addButtonName, setAddButtonName] = useState('Add Routine')
  const [sideButtonName, setsideButtonName] = useState('Start Workout')
  const [currentContent, setCurrentContent] = useState(routines.routines)
  const [displayExercises, setDisplayExercises] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const [navAdd, setNavAdd] = useState({ path: '/createroutines', state: { nothing: null } })
  console.log(routines)

  const handleExerciseClick = (routine) => {
    console.log(routine)
    if (routine && routine.exercises) {
      setCurrentContent(routine.exercises)
      setDisplayExercises(true)
      setButtonName('Back to Routines')
      setAddButtonName('Add Workout')
      setAnimationKey(prevKey => prevKey + 1)
      console.log(routine._id)
      setNavAdd({ path: '/createworkout', state: { routineId: routine._id } })
    } else {
      console.error("nothing")
    }
  }

  const handleBackToRoutines = () => {
    setCurrentContent(routines.routines)
    setDisplayExercises(false)
    setButtonName('Show Workout')
    setAddButtonName('Add Routine')
    setNavAdd({ path: '/createroutines', state: { nothing: null } })
    setAnimationKey(prevKey => prevKey + 1)
  } 

  const handleCreateRoutine = () => {
      navigate(navAdd.path, { state: navAdd.state });
  }

  if (!currentContent.length || currentContent.length === 0) {
    return (
        <div className="flex flex-col h-screen bg-slate-500">
          <button onClick={handleCreateRoutine} className="btn bg-blue-500 text-white">
            {addButtonName}
          </button>
            <div className="text-white text-xl">
                No data available.
            </div>
        </div>
    )
}


return (
  <div className="flex flex-col h-screen bg-slate-500">
      <button onClick={handleCreateRoutine} className="btn bg-blue-500 text-white">
        {addButtonName}
      </button>
    <div className="flex-grow flex justify-center items-center bg-slate-500">
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
