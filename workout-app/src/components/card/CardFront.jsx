import React from 'react';
import CardTitle from './CardTitle';
import CardBody from './CardBody';

const CardFront = ({ content, onButtonClick, buttonColor }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-start p-3 bg-slate-200 rounded-lg shadow-lg transform backface-hidden">
      <div className="w-full">
        <CardTitle text={content.title} />
      </div>
      <div className="w-full flex-1 overflow-auto mt-2 mb-10">
        <CardBody> 
            {Array.isArray(content.body) ? (
                <ul className="flex flex-col w-full">
                  {content.body.map((item, index) => (
                    <li className='divider' key={index}>{item}</li>
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
          className={`btn btn-outline btn-accent absolute bottom-2 right-2 btn-sm`}
          >
            Check workout
      </button>
      </div>
    </div>
  )
}

export default CardFront