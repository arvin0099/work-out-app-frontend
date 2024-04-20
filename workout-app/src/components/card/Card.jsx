import React from 'react'
import { useState } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

const Card = ({ frontContent, backContent, onButtonClick, buttonColor, buttonName, sideButtonName, routineId, displayExercises }) => {  
  const [isFlipped, setIsFlipped] = useState(false)
  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
 
  return (
    <div
      className=" perspective w-72 h-96" onClick={handleClick}>
      <div
        className={`shadow-xl relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''} `}
      >
        <CardFront content={frontContent} onButtonClick={onButtonClick} buttonColor={buttonColor} buttonName={buttonName} sideButtonName={sideButtonName} displayExercises={displayExercises}/>
        <CardBack content={frontContent} onButtonClick={onButtonClick} buttonColor={buttonColor} buttonName={buttonName} displayExercises={displayExercises} routineId={routineId} />

      </div>
    </div>
  )
}

export default Card