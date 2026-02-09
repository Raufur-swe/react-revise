import React, { useState } from 'react'

const App = () => {
 
  const[num , setnum] = useState(0);
  if(num<0){
    alert("are going minuse")
  }
  return (
    <div>
      
     <h1>value of a is = {num} </h1>
     <button onClick={()=>setnum(num+1)} >Increase </button>
     
     <button onClick={()=>setnum(num-1)} >decrease</button>
    </div>
  )
}

export default App