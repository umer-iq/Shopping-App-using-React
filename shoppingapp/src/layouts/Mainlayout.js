import React from 'react'
import PropTypes from 'prop-types'
import Header from '../componenets/header'

const Mainlayout = props => {
  return (
    <div>
        <Header/>
        <div className='main'>
            {props.childern}
        </div>
    </div>
  )
}



export default Mainlayout