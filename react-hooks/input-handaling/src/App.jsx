import React from 'react'

const App = () => {
  const fromhandeler = (e) => {
    e.preventDefault()

    console.log("from submitted")
  }
  return (
    <div>
      <form onSubmit={(e) => { fromhandeler(e) }}>

        <input type="text" placeholder='type something...' />
        <button>Sibmit</button>
      </form>
    </div>
  )
}

export default App