import React from 'react';

const UCardBody = ({cards}) => {
    console.log(cards)
    const removeNew = cards.slice(1)
  return (
    <div className="w-full flex-1 overflow-auto p-1 mt-2 text-black">
                <h1 className='font-bold text-2xl truncate text-black'>Routines:</h1>
                <ul>
                    {removeNew.map((card, index) => (
                        <li className='font-bold text-lg' key={index}>
                            - {card.frontContent.title}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

export default UCardBody

