import React, { useState, useEffect } from 'react'
import CardBody from './CardBody'
import { useNavigate } from "react-router-dom"
import { getUserData } from '../GetData'

const CardBack = ({ content, buttonColor, routineId}) => {
  const navigate = useNavigate()
  const [exerciseDetails, setExerciseDetails] = useState({
    sets: content.sets || 0,
    reps: content.reps || 0,
    weight: content.weight || 0
  })

  const [currentContent, setCurrentContent] = useState(content)

  const userId = localStorage.getItem("userID")
  const token = localStorage.getItem("authoToken")
  const URL = `https://work-out-app-backend-2f34898d7848.herokuapp.com/api/user/${userId}/routine/${routineId}/exercise/${content._id}`

  console.log(URL)


  useEffect(() => {
    console.log(content);
    if (content && content.exercises) {
      setExerciseDetails({
        sets: content.exercises.sets || 0,
        reps: content.exercises.reps || 0,
        weight: content.exercises.weight || 0
      })
    }
  }, [content])

  const updateWorkout = async () => {
    console.log('hit')
    try {
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(exerciseDetails)
        })
        console.log('hit')
        const data = await response.json()
        console.log(exerciseDetails)
        console.log(data)
    } catch (error) {
        console.error('Failed to update exercise:', error)
    }
  }

  const deleteWorkout = async () => {
    try {
        const response = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(exerciseDetails)
        })
        const data = await response.json()
        navigate('/routines')
    } catch (error) {
        console.error('Failed to update exercise:', error)
    }
}

  const handleIncrement = (field, e) => {
    e.stopPropagation()
    setExerciseDetails(prevDetails => ({
      ...prevDetails,
      [field]: prevDetails[field] + 1
    }))
  }

  const handleDecrement = (field,e ) => {
    e.stopPropagation()
    setExerciseDetails(prevDetails => ({
      ...prevDetails,
      [field]: Math.max(0, prevDetails[field] - 1)
    }))
  }

  const handleSave = (e) => {
    e.stopPropagation()
    updateWorkout()
  }

  const handleNavEdit = (content) => {
    navigate('/editroutine', { state: { routine: content } })
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    deleteWorkout()
    navigate('/routines')
  }

  if (currentContent === null) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-500">
        <p className="text-white text-xl">Loading...</p>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 bg-slate-300 rounded-lg shadow-lg transform rotate-y-180 backface-hidden">
      <div className="w-full flex-1 overflow-auto mt-2 mb-10 text-black">
        {content.day ? (
            <>
              <h1 className='font-extrabold'>Workout Days</h1>
              {content.day.map((day, index) => (
                <li key={index} className="divider">{day}</li>
              ))}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNavEdit(content)
                }}
                className={`btn ${buttonColor} absolute bottom-2 left-2 btn-sm text-white`}
              >
                Edit Routine
              </button>
            </>
          ) : (
            <>
              <ul className="flex flex-col w-full">
                <li className='divider'>
                  Sets: {exerciseDetails.sets}
                  <button className='font-extrabold' onClick={(e) => handleIncrement('sets', e)}>+</button>
                  <button className='font-extrabold' onClick={(e) => handleDecrement('sets', e)}>-</button>
                </li>
                <li className='divider'>
                  Reps: {exerciseDetails.reps}
                  <button className='font-extrabold' onClick={(e) => handleIncrement('reps', e)}>+</button>
                  <button className='font-extrabold' onClick={(e) => handleDecrement('reps', e)}>-</button>
                </li>
                <li className='divider'>
                  Weight: {exerciseDetails.weight} lbs
                  <button className='font-extrabold' onClick={(e) => handleIncrement('weight', e)}>+</button>
                  <button className='font-extrabold' onClick={(e) => handleDecrement('weight', e)}>-</button>
                </li>
              </ul>
                <button
                  onClick={handleSave}
                  className={`btn ${buttonColor} absolute bottom-2 right-2 btn-sm text-white`}
                >
                  Save Changes
                </button>
                <button
                  onClick={handleDelete}
                  className={`btn ${buttonColor} absolute bottom-2 left-2 btn-sm text-white bg-red-800`}
                >
                  Delete Workout
                </button>
            </>
          )}
      </div>
    </div>
  )
}

export default CardBack
