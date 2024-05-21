import React from 'react'
import { MdDateRange } from "react-icons/md";
import "./index.css"
const InputComponent = ({ type = "text", title, placeholder, onChange, value, className, id }) => {
    return (
        <div className={`input-container ${className}`}>
            <label>{title}</label>
            <div className='d-flex align-items-center'>
                <input
                    id={`custom-input ${id}`}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {/* {type === "date" && <label className='md-date-range' htmlFor='custom-input'>
                    <MdDateRange />
                </label>} */}
            </div>
        </div>)
}

export default InputComponent