import React from 'react'
import shopmen from '../../assets/menf.jpg'

import shopwomen from '../../assets/womenf.jpg'
import './style.scss'
const Directory = () => {
  return (
    <div className='directory'>
       <div className='wrap'>
        <div className='item' style={{background:`url(${shopmen})`,width:'700px'}}><a href='/'>Shop Men </a></div>
        <div className='item' style={{background:`url(${shopwomen})`,width:'610px'}}><a href='/'>Shop Women </a></div>
    </div>
    </div>
  )
}

export default Directory