import React from 'react'
import './styles.scss'
import logo from '../..//assets/—Pngtree—technology shop logo designs online_5301621.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
        <div className='wrap'>
            <div className='logo'>
               <Link to='/'>
               <img src={logo} alt="simple text"/>
                </Link>
                
            </div>
            <div className='callToActions'>
              <ul>
                <li>
                  <Link to="/registration">Register</Link>
                  
                </li>
              </ul>
            </div>
        </div>
    </header>
  )
}

export default Header