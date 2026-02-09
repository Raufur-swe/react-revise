import React from 'react'
import { useState } from 'react'

const App = () => {
  const [text, setText] = useState("")
  const fromhandeler = (e) => {
    e.preventDefault() // not reload the page when submit the form

    console.log("from submitted");
    console.log(text);
    setText("") // blank the input after submtting
  }
  return (
    <div>
      <form onSubmit={(e) => { fromhandeler(e) }}>

        <input type="text" placeholder='type something...'
        value={text} onChange={(e)=>setText(e.target.value)} />
        <button>Sibmit</button>
        
      </form>
    </div>
  )
}

export default App