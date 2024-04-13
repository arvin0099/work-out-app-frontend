import React, { useState } from 'react'
import UCardFront from './UCardFrontData'
import UCardBack from './UCardBack'


const UCard = ({userData, isLoggedIn, routines}) => {

    console.log("ucard", routines);

    const [isFlipped, setIsFlipped] = useState(false);

    const flipToFront = () => setIsFlipped(false)

    const flipToBack = () => setIsFlipped(true)

    const userCard = (
    
    <div style={{ width: '642px', height: '420px' }} className="perspective">
        <div className={`shadow-xl relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''}`}>
            <UCardFront userData={userData} flipToBack={flipToBack} routines={routines}/>
            <UCardBack userData={userData} flipToFront={flipToFront} routines={routines} />
        </div>
    </div>
    )

    return isLoggedIn ? userCard : <></>
}

export default UCard