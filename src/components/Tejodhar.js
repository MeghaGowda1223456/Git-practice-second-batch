import React from 'react'
import { useState } from 'react'

const Tejodhar = () => {
    const [first, setfirst] = useState("Hi")
    let fun =()=>{
        setfirst('bye')
    }
  return (
    <div>
        <p>{fisrt}</p>
        <button onClick={fun}>click me</button>
    </div>
  )
}

export default Tejodhar