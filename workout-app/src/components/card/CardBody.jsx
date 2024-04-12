import React from 'react';

const CardBody = (props) => {
  console.log(props)
  return (
  <div className="w-full flex-1 overflow-auto border-2 border-green-500 p-1 mt-2">
    {props.children}
  </div>
  )
}

export default CardBody


