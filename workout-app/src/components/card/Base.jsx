import React, { useState } from 'react'
import Card from './Card'
import {cards, workOut} from "../../data";

const CardApp = () => {
  const buttonColor = 'bg-blue-500'
  const buttonName = 'test'
  const [animationKey, setAnimationKey] = useState(0)

  const handleButtonClick = () => {
    const newCards = workOut.map(item => ({
      frontContent: {
        title: item.title,
        body: item.body,
      },
      backContent: item.backContent
    }))
    setCards(newCards)
    setAnimationKey(prevKey => prevKey + 1)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-1 max-w-4xl mx-auto px-4">
        {cards.map((card, index) => (
          <div
            key={`${index}-${animationKey}`}
            className="mx-2 my-2 opacity-0"
            style={{
              animation: 'fadeIn 0.5s ease forwards',
              animationDelay: `${index * 0.2}s`
            }}
          >
            <Card
              frontContent={card.frontContent}
              backContent={card.backContent}
              onButtonClick={handleButtonClick}
              buttonColor={buttonColor}
              buttonName={buttonName}
            />
          </div>
        ))}
      </div>
    </div>
  )
}


export default CardApp
