import React, { useEffect, useState } from 'react'
import { themes } from '../data'
import ThemeItem from './ThemeItem'
import { FaCog } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import './themes.css'
import { FaC } from 'react-icons/fa6'

const getStorageColor = () => localStorage.getItem('color') ?? 'hsl(252, 35%, 51%)';

const getStorageTheme = () => localStorage.getItem('theme') ?? 'light-theme';

function Themes() {

const [showswitcher, setShowSwitcher] = useState(false) 
const [color, setColor] = useState(getStorageColor())
const [theme, setTheme] = useState(getStorageTheme);

const changeColor = (color) => {
setColor(color)
};

const toggleTheme = () =>{
  if(theme === 'light-theme'){
    setTheme('dark-theme');
  }
  else{
    setTheme('light-theme')
  }
}

useEffect(() => {
  document.documentElement.style.setProperty('--first-color', color);
  localStorage.setItem('color', color)
}, [color])

useEffect(()=>{
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme)
}, [theme])

  return (
    <div className={`${showswitcher ? 'show-switcher' : ''} style_switcher`}>
      <div className="style_switcher_toggler" onClick={()=> setShowSwitcher(!showswitcher)}>
        <FaCog />
      </div>

      <div className="theme_toggler" onClick={toggleTheme}>
        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
      </div>

      <h3 className="style_switcher_title">Style Switcher</h3>

      <div className="style_switcher_items">
        {themes.flatMap((theme, index) =>{
          return <ThemeItem key={index} {...theme} changeColor={changeColor} />
        })}
      </div>

      <div className="style_switcher_close" onClick={()=> setShowSwitcher(!showswitcher)}>&times;</div>
    </div>
  )
}

export default Themes
