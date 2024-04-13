import React, { useState, useEffect } from 'react';
import CardBody from './CardBody';

const CardBack = ({ content, onButtonClick, buttonColor, buttonName, displayExercises, userId, routineId, exerciseId }) => {
  console.log(content)
  const [exerciseDetails, setExerciseDetails] = useState({
    sets: content.sets || 0,
    reps: content.reps || 0,
    weight: content.weight || 0
  })

  const URL = `http://localhost:4000/user/${userId}/routine/${routineId}/exercise/${exerciseId}`

  useEffect(() => {
    if (content && content.exercises) {
      setExerciseDetails({
        sets: content.exercises.sets || 0,
        reps: content.exercises.reps || 0,
        weight: content.exercises.weight || 0
      })
    }
  }, [content])

  const updateWorkout = async () => {
    try {
      const response = await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("authoToken")}`
        },
        body: JSON.stringify(exerciseDetails)
      })
      const data = await response.json();
      console.log('Update successful:', data);
      if (response.ok) {
        onButtonClick()
      } else {
        throw new Error(data.message || 'Unknown error occurred')
      }
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
    onButtonClick()
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 bg-slate-300 rounded-lg shadow-lg transform rotate-y-180 backface-hidden">
      <div className="w-full flex-1 overflow-auto mt-2 mb-10 text-black">
        <ul className="flex flex-col w-full">
        {content.day ? (
          content.day.map((day, index) => (
            <li key={index} className="divider">
              {day}
            </li>
          ))
          ) : (
            <>
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
            </>
          )}
        </ul>
        <button
          onClick={handleSave}
          className={`btn ${buttonColor} absolute bottom-2 right-2 btn-sm text-white`}
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default CardBack
