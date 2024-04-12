import React from 'react';

const CardBody = (props) => {
  console.log(props)
  return (
  <div className="w-full flex-1 overflow-auto p-1 mt-2 text-black">
    {props.children}
  </div>
  )
}

export default CardBody


