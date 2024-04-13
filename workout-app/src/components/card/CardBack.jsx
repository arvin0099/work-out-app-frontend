import React from 'react';
import CardBody from './CardBody';

const CardBack = ({ content, onButtonClick, buttonColor, buttonName, displayExercises }) => {
  if (displayExercises) {
    buttonName = 'Save Changes'
  }
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
            <li>No Days Listed</li>
          )}
        </ul>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onButtonClick()
          }}
          className={`btn ${buttonColor} absolute bottom-2 right-2 btn-sm text-white`}
        >
          {buttonName}
        </button>
      </div>
    </div>
  )
}

export default CardBack
