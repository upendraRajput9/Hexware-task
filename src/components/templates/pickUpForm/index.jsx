import React from 'react'
import ButtonComponent from '../../commonComponent/buttons'
import InputComponent from '../../commonComponent/InputComponent'
import "./index.css"

const PickUpForm = () => {
    return (
        <div className='pickup-form-container'>
            <div className='d-flex'>
                <ButtonComponent
                btnType="secondary"
                title="Domestic"
                active={true}
                />
                <ButtonComponent
                btnType="secondary"
                title="International"
                className="ml-1"
                />
            </div>
            <InputComponent
                type='text'
                title="Pick up location"
                className="mt-1"
            />
            <InputComponent
                type='text'
                title="Drop up location"
                className="mt-1"
            />
            <InputComponent
                type='number'
                title="Contact"
                className="mt-1 contact-input"
            />
            <div className='d-flex'>
            <InputComponent
                type='date'
                title="Shipping Date"
                className="mt-1 contact-input"
            />
            </div>
            <div className='py-4 flex-justify-end'>
                <ButtonComponent
                    title="Get estimate"
                />
            </div>
        </div>
    )
}

export default PickUpForm