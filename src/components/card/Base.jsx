import React, { useState, useEffect } from 'react'
import Card from './Card'
import { useParams } from "react-router-dom";
import { logDOM } from '@testing-library/react';
import { useNavigate } from "react-router-dom"
import { getUserData } from '../GetData'

const CardApp = () => {
  const buttonColor = 'bg-blue-500'
  const navigate = useNavigate()
  const [routines, setRoutines] = useState(null)
  const [buttonName, setButtonName] = useState('Show Exercises')
  const [addButtonName, setAddButtonName] = useState('Add Routine')
  const [sideButtonName, setsideButtonName] = useState('Start Workout')
  const [currentContent, setCurrentContent] = useState(null)
  const [displayExercises, setDisplayExercises] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const [navAdd, setNavAdd] = useState({ path: '/createroutines', state: { nothing: null } })
  const [routineId, setRoutineId] = useState(null)
  const userId = localStorage.getItem("userID")
  console.log(routines)


  useEffect(()=> {
    const fetchData = async () => {
      try {
        const data = await getUserData(userId);
        setRoutines(data)
        setCurrentContent(data?.routines || [])
        console.log(data)
      } catch (err) {
        console.error("Failed to fetch routines:", err)
        setCurrentContent([])
      }
    }
    fetchData()
  }, [userId])

  const handleExerciseClick = (routine) => {
    console.log(routine)
    if (routine && routine.exercises) {
      setCurrentContent(routine.exercises)
      setDisplayExercises(true)
      setButtonName('Back to Routines')
      setAddButtonName('Add Workout')
      setAnimationKey(prevKey => prevKey + 1)
      console.log(routine)
      setNavAdd({ path: '/createworkout', state: { routineId: routine._id } })
      setRoutineId(routine._id)
      console.log(navAdd)
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

  const handleStartWorkOut = () => {
    console.log(routines)
    navigate('/startset', { state: { routines } })
  }

  const handleCreateRoutine = () => {
      navigate(navAdd.path, { state: navAdd.state });
      console.log('hit' + navAdd)
  }

  if (currentContent === null) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-500">
        <p className="text-white text-xl">Loading...</p>
      </div>
    )
  }

  if (currentContent.length === 0) {
    return (
      <div className="flex flex-col h-screen bg-slate-500">
        <button onClick={handleCreateRoutine} className="btn bg-blue-500 text-white">
          {displayExercises ? 'Add Workout' : 'Add Routine'}
        </button>
        <div className="text-white text-xl">No data available.</div>
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
              routineId ={routineId}
            />
          </div>
        ))}
      </div>
    </div>
    {/* {displayExercises && (
          <button onClick={handleStartWorkOut} className="btn bg-green-700 text-white mt-4">
            Start Routine
          </button>
        )} */}
  </div>
)
}


export default CardApp
