import React from 'react'
import { useState } from 'react';

function Hemant() {
    const [counter, setCounter] = useState(0)

    let Increment=()=>{
        setCounter(counter+1)
        if(counter>=10){
            setCounter(0);
        }
    }

    let Decrement=()=>{
        setCounter(counter-1)
        if(counter<=0){
            setCounter(10);
        }
    }
    let Reset=()=>{
        setCounter(0)
    }

  return (
    <div>
        <h1>HEMANT : Counter</h1>
        <h3>{counter}</h3>
        <button onClick={Increment }>➕</button>
        <button onClick={Decrement}>➖</button>
        <button onClick={Reset}>RESET</button>
    </div>
  )
}

export default Hemant