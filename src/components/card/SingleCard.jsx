import React from "react";
import Card from "./Card";

const SingleCard = ({cards}) => {
    const buttonName = 'Start Workout'
    return (
        <div>
            <Card frontContent={cards} buttonName={buttonName}/>
        </div>
    )
}

export default SingleCard