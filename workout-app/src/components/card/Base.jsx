import React, { useState } from 'react'
import Card from './Card'

const CardApp = () => {
  const buttonColor = 'bg-blue-500'

  const [cards, setCards] = useState([
    {
      frontContent: {
        title: "NEW",
        body: "Click here to add new",
      },
      backContent: "Add new",
    },
    {
      frontContent: {
        title: "Chest Workout",
        body: ["Push ups", "Bench Press", "Inclined Bench Press"],
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Leg Work Out",
        body: "This is the front body text for card 2.This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2This is the front body text for card 2",
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Shoulder Work out",
        body: "This is the front body text for card 2.",
      },
      backContent: "This is the back of card 2.",
    },
    {
      frontContent: {
        title: "Front Title 2",
        body: "This is the front body text for card 2.",
      },
      backContent: "This is the back of card 2.",
    },

  ])

  const workOut = [
    {
      title: "New",
      body: "Click Here to add new",
      backContent: "Add new"
      },
    {
    title: "Push Ups",
    body: "Using the floor you push your self up",
    backContent: "Using the floor you push your self up"
    },
    {
    title: "Bench Press",
    body: "Use the bench with the barbell",
    backContent: "Use the bench with the barbell"
    },
    {
    title: "Inclined Bench Press",
    body: "Use the inclined bench with the barbell",
    backContent: "Use the inclined bench with the barbell"
    },
  ]

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
            />
          </div>
        ))}
      </div>
    </div>
  )
}


export default CardApp
