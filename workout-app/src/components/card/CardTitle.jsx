import React from 'react';

const CardTitle = (props) => {
  return (
  <div className="w-full p-1 bg-blue-300">
    <h2 className="text-xl font-bold truncate text-black">{props.text}</h2>
  </div>
  )
}

export default CardTitle
