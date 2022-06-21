import React from 'react'
import PropTypes from 'prop-types'
import Header from '../componenets/header'

const Homepagelayout = props => {
  return (
    <div className='fullHeight'>
        <Header/>
        <div className='main'>
            {props.childern}
        </div>
    </div>
  )
}


export default Homepagelayout