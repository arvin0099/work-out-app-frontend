import React from 'react';

const CardBack = (props) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 bg-slate-300 rounded-lg shadow-lg transform rotate-y-180 backface-hidden">
      <div>
        <p className="text-xl font-bold">{props.content}</p>
      </div>
    </div>
  );
};

export default CardBack
