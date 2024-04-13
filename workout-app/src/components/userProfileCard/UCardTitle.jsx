import React from 'react';

const UCardTitle = ({username, firstname, lastname, dob, bodyWeight}) => {
    
  return (
  <div className="w-full p-1">
    <p className="text-2xl font-bold truncate text-black">Welcome {username}!</p>
    <p className="text-xl font-bold truncate text-black">Name: {firstname} {lastname}</p>
    <p className="text-xl font-bold truncate text-black">Date of Birth: {dob}</p>
    <p className="text-xl font-bold truncate text-black">Weight: {bodyWeight}lbs</p>
  </div>
  )
}

export default UCardTitle
