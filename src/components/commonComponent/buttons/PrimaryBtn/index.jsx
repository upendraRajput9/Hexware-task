import React from 'react'
import "./index.css"

const PrimaryBtn = ({ title, onClick}) => {
  return (
    <button className='primary' onClick={onClick}>{title}</button>
  )
}

export default PrimaryBtn