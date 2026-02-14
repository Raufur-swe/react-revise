import React from 'react'
import { useContext } from 'react'
import { themeDatacontext } from '../context/ThemeContext'

const Nav2 = () => {
    const {theme , setTheme} = useContext(themeDatacontext);
  return (
    <div className='nav2' >
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>{theme}</p>
       
        


    </div>
  )
}

export default Nav2