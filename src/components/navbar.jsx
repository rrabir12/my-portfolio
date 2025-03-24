import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../data'
import './navbar.css'

function Navbar() {

  const [showmenu, setShowMenu] = useState(false)

  return (
   <nav className="nav">
    <div className={`${showmenu ? 'nav_menu show_menu' : 'nav_menu'}`}>
      <ul className="nav_list">
        {links.map(({name, icon, path}, index) => {
          return (
            <li className="nav_item" key={index}>
              <NavLink to={path} className={({ isActive }) => isActive ? 'nav_link active-nav' : 'nav_link'} onClick={() => setShowMenu(!showmenu)} >
                {icon}
                <h3 className='nav_name'>{name}</h3>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>

    <div className={`${showmenu ? 'nav_toggle animate_toggle' : 'nav_toggle'}`} onClick={() => setShowMenu(!showmenu)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
   </nav>
  )
}

export default Navbar
