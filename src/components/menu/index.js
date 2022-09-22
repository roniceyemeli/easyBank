import React from 'react';
import './index.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <div className={"box__menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}><a href="#home">home</a></li>
                <li onClick={()=> setMenuOpen(false)}><a href="#home">about</a></li>
                <li onClick={()=> setMenuOpen(false)}><a href="#home">contact</a></li>
                <li onClick={()=> setMenuOpen(false)}><a href="#home">blog</a></li>
                <li onClick={()=> setMenuOpen(false)}><a href="#home">careers</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu