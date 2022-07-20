import React, { useState } from 'react'

function Viddd() {

    const [first, setfirst] = useState("")

let giveName =()=>{
    setfirst("Buhahaha")
}

  return (
    <div>
        <p>My name is</p>
        <h1>{first}</h1>
        <button onClick={giveName}>Click Me</button>
    </div>

  )
}

export default Viddd