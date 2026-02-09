import React, { useState } from 'react'
import { useEffect } from 'react';

const App = () => {
  const[num1 , setNum1] = useState(0);
  const[num2 , setNum2] = useState(0);

  const A = ()=>{
    setNum1(num1 + 1)
  }
  const B = ()=>{
    setNum2(num2 + 1)
  }
  // useeffect
  useEffect(()=>{
    console.log("useeffect is calling")
  },[]) // this will not run in every changing
  
  return (
    <div>
    <div>
      <h1>A is changing = {num1}</h1>
  <button onClick={A} >
    A
  </button>
    </div>
    <div>
      <h1>B is changing = {num2}</h1>
  <button onClick={B}>
    B
  </button>
    </div>
    </div>
  )
}

export default App