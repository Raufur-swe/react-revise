import React, { useContext } from 'react'
import Nav2 from './NAv2'
import { themeDatacontext } from '../context/ThemeContext'

const Navber = () => {
    const {theme} = useContext(themeDatacontext)
  return (
    <div className={theme} >
        <h1>Context api</h1>
        <Nav2  />
    </div>
  )
}

export default Navber