import React from 'react'
import shopmen from '../../assets/menf.jpg'

import shopwomen from '../../assets/womenf.jpg'
import './style.scss'
const Directory = () => {
  return (
    <div className='directory'>
       <div className='wrap'>
        <div className='item' style={{background:`url(${shopmen})`,width:'730px'}}><a href='/'>Shop Mens </a></div>
        <div className='item' style={{background:`url(${shopwomen})`,width:'550px'}}><a href='/'>Shop Womens </a></div>
    </div>
    </div>
  )
}

export default Directory