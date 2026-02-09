import React from 'react'
//for saving in browser 

localStorage.setItem('user' , 'raufur') // user is key and raufur is a value
const user = localStorage.getItem("user") // for getting
console.log(user)
const App = () => {
  return (
    <div>App</div>
  )
}

export default App