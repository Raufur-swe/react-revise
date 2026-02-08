import React from 'react'
// calling a  function

const App = () => {
  
  function input(e){
    console.log(e)
  }
  return (
  <>
  <input onChange={(e)=>{input(e.target.value)}} type="text" placeholder='calling building fnction....' />
  <input onChange={(e)=>{console.log(e.target.value)}} type="text" placeholder='calling inline function...' />
  </>
  )
}

export default App