import React, { useState } from 'react'
import UCardFront from './UCardFrontData'
import UCardBack from './UCardBack'
import user from '../../dataUser'


const UCard = ({isLoggedIn}) => {

    console.log(user)

    const [isFlipped, setIsFlipped] = useState(false);

    const flipToFront = () => setIsFlipped(false)

    const flipToBack = () => setIsFlipped(true)

    const userCard = (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
        <div style={{ width: '642px', height: '420px' }} className="perspective">
            <div className={`shadow-xl relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''}`}>
                <UCardFront user={user} flipToBack={flipToBack}/>
                <UCardBack user={user} flipToFront={flipToFront} />
            </div>
        </div>
    </div>
    )

    return userCard
}

export default UCard