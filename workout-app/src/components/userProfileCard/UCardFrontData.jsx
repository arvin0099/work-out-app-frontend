import React, {useState} from "react";
import UCardBody from "./UCardBody";
import UCardTitle from "./UCardTitle";
import {cards, workOut} from "../../data";

const UCardFront = ({ flipToBack, user }) => {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-start p-3 bg-stone-300 rounded-lg shadow-lg transform backface-hidden">
        <div className="w-full">
          <UCardTitle user={user} />
        </div>
        <div className="w-full flex-1 overflow-auto mt-2 mb-10 bg-slate-100">
        <UCardBody user={user}/>
          <button className="btn btn-primary absolute bottom-2 right-2 btn-sm" onClick={flipToBack}>
            Edit User
          </button>
        </div>
      </div>
    );
};

export default UCardFront