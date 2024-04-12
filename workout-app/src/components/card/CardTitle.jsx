import React from 'react';

const CardTitle = (props) => {
  return (
  <div className="w-full border-2 border-blue-500 p-1">
    <h2 className="text-xl font-bold truncate text-blue-700">{props.text}</h2>
  </div>
  )
}

export default CardTitle
