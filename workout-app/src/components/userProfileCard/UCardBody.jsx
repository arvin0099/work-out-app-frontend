import React from 'react';

const UCardBody = ({userData, routines}) => {
    console.log("ucardbody", routines);
  return (
    <div className="w-full flex-1 overflow-auto p-1 mt-2 text-black">
                <h1 className='font-bold text-2xl truncate text-black'>Routines:</h1>
                <ul>
                    {routines.map((routine, index) => (
                        <li className='font-bold text-lg' key={index}>
                            - {routine.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

export default UCardBody


