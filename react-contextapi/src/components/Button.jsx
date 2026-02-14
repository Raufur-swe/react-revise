import React, { useContext } from 'react'
import { themeDatacontext } from '../context/ThemeContext'

const Button = () => {
    const{theme , setTheme} = useContext(themeDatacontext)
    
    const changedTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <div>
        <button onClick={changedTheme}>
            change
        </button>
    </div>
  )
}

export default Button