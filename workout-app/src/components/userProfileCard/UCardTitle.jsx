import React from 'react';

const UCardTitle = ({user}) => {
  return (
  <div className="w-full p-1">
    <p className="text-2xl font-bold truncate text-black">Welcome {user.username}!</p>
    <p className="text-xl font-bold truncate text-black">Name: {user.firstName} {user.lastName}</p>
    <p className="text-xl font-bold truncate text-black">Date of Birth: {user.DOB}</p>
    <p className="text-xl font-bold truncate text-black">Weight: {user.bodyWeight}lbs</p>
  </div>
  )
}

export default UCardTitle
