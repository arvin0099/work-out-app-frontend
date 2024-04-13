import React, { useState } from 'react'
import UCardFront from './UCardFrontData'
import UCardBack from './UCardBack'


const UCard = ({user, isLoggedIn}) => {

    console.log(user)

    const [isFlipped, setIsFlipped] = useState(false);

    const flipToFront = () => setIsFlipped(false)

    const flipToBack = () => setIsFlipped(true)

    const userCard = (
    
    <div style={{ width: '642px', height: '420px' }} className="perspective">
        <div className={`shadow-xl relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''}`}>
            <UCardFront user={user} flipToBack={flipToBack}/>
            <UCardBack user={user} flipToFront={flipToFront} />
        </div>
    </div>
    )

    return isLoggedIn ? userCard : <></>
}

export default UCard