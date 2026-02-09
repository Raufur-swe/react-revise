import React, { useState } from 'react'
import axios from 'axios'



const App = () => {
  const [title , setTitle] = useState([])
  
  const getData = async ()=>{
  
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
 
  setTitle(res.data);
}
 
return (
    <div>
      <button onClick={getData}>
        get Data
      </button>
      
      {title.map((e , idx)=>{
         return <h3>
            {e.title}
          </h3>
      
      })}
    </div>
  )
}

export default App