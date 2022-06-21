import React from 'react'
import './styles.scss'
import logo from '../..//assets/—Pngtree—technology shop logo designs online_5301621.png'
const Header = () => {
  return (
    <header className='header'>
        <div className='wrap'>
            <div className='logo'>
                <img src={logo} alt="simple text"/>
            </div>
        </div>
    </header>
  )
}

export default Header