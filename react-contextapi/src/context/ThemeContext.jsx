import React, { createContext, useState } from 'react'

export const themeDatacontext = createContext()
const ThemeContext = (props) => {
    const [theme , setTheme] = useState("light") // creting the theme state
  return (
    <div>
        {/* taking usestate as value */}
       <themeDatacontext.Provider value={{theme , setTheme}}> 
         {props.children}
       </themeDatacontext.Provider>
           
        
    </div>
  )
}

export default ThemeContext