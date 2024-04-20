import React from 'react';

const UCardTitle = ({user}) => {
    console.log(user)
  
    const date = user && user.DOB ? user.DOB.split('T')[0] : ''
  return (
  <div className="w-full p-1">
    <p className="text-2xl font-bold truncate text-black ">Welcome {user.username}!</p>
    <div className="flex flex-col justify-start items-start">
        <p className="text-l font-bold truncate text-black divider">Name: {user.firstName} {user.lastName}</p>
        <p className="text-l font-bold truncate text-black divider">E-Mail: {user.email} </p>
        <p className="text-l font-bold truncate text-black divider">Date of Birth: {date}</p>
        <p className="text-l font-bold truncate text-black divider">Weight: {user.bodyWeight}lbs</p>
    </div>
  </div>
  )
}

export default UCardTitle
