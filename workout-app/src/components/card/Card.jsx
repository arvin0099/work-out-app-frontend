import React from 'react'
import { useState } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

const Card = ({ frontContent, backContent, onButtonClick, buttonColor }) => {
    
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
        <CardFront content={frontContent} onButtonClick={onButtonClick} buttonColor={buttonColor} />
        <CardBack content={backContent} />
      </div>
    </div>
  )
}

export default Card