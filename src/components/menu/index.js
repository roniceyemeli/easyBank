import React from 'react';
import './index.scss';
import useOnclickOutside from 'react-cool-onclickoutside';

const Menu = ({innerRef, menuOpen, setMenuOpen}) => {
    const ref = useOnclickOutside(() => {
        setMenuOpen(false);
      });
  return (
    <div className={"menu " + (menuOpen && "active")} >
        <div className={"box__menu " + (menuOpen && "active")}  ref={innerRef}>
            <ul ref={ref}>
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