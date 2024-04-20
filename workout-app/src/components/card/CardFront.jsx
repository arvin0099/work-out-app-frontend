import React, { useState, useEffect } from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import { useNavigate } from "react-router-dom"
import { getUserData } from '../GetData';

const CardFront = ({ content, onButtonClick, buttonColor, buttonName, sideButtonName, displayExercises }) => {
  const navigate = useNavigate()
  // const [content, setContent] = useState()
  // const userId = localStorage.getItem("userID")
  
  
  // useEffect(()=> {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getUserData(userId);
  //       // setRoutines(data)
  //       setContent(data?.routines || [])
  //       console.log(content)
  //     } catch (err) {
  //       console.error("Failed to fetch routines:", err)
  //     }
  //   }
  //   fetchData()
  // }, [userId])

  const onSideButtonClick = () => {
    navigate('/startset', { state: { content } })
  };


  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start p-3 bg-slate-200 rounded-lg shadow-lg transform backface-hidden">
      <div className="w-full">
        <CardTitle text={content.name} />
      </div>
      <div className="w-full flex-1 overflow-auto mt-2 mb-10">
        <CardBody>
          {Array.isArray(content.exercises) ? (
            <ul className="flex flex-col w-full">
              {content.exercises.map((exercise, index) => (
                <li key={index} className='divider'>
                  {exercise.name}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-col w-full">
            <li className='divider'>Sets: {content.sets}</li>
            <li className='divider'>Reps: {content.reps}</li>
            <li className='divider'>Weight:{content.weight} lbs</li>
          </ul>
          )}
        </CardBody>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onButtonClick()
          }}
          className={`btn ${buttonColor} absolute bottom-2 right-2 btn-sm text-white`}
        >
          {buttonName}
        </button>
        {displayExercises && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSideButtonClick();
            }}
            className={`btn ${buttonColor} absolute bottom-2 left-2 btn-sm text-white`}
          >
            {sideButtonName}
          </button>
        )}
      </div>
    </div>
  )
}

export default CardFront