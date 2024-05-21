import React from 'react'
import "./index.css"

const SecondaryBtn = ({ title, onClick, className, active }) => {
  return (
    <div className={`${active ? "active-btn" : "inactive-btn"} secondary ${className}`} onClick={onClick}>{title}</div>
  )
}

export default SecondaryBtn