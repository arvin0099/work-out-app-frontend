import React from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';

const CardFront = ({ content, onButtonClick, buttonColor }) => {

  console.log(content.body)

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start p-3 bg-white rounded-lg shadow-lg transform backface-hidden hover:bg-slate-100">
      <div className="w-full">
        <CardTitle text={content.title} />
      </div>
      <div className="w-full flex-1 overflow-auto mt-2 mb-10">
        <CardBody>
            {Array.isArray(content.body) ? (
              <ul className="list-disc list-inside">
                {content.body.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content.body}</p>
            )}
          </CardBody>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onButtonClick()
            }}
          className={`${buttonColor} absolute bottom-2 right-2 text-white p-2 rounded text-sm w-32 h-8 flex items-center justify-center overflow-hidden hover:opacity-80`}
          >
            Check workout
      </button>
      </div>
    </div>
  )
}

export default CardFront