import React from 'react'
import PrimaryBtn from './PrimaryBtn'
import SecondaryBtn from './SecondaryBtn'


const ButtonComponent = (props) => {
    const { btnType } = props
    return (
        <>
            {btnType === "secondary" ? <SecondaryBtn {...props} /> : <PrimaryBtn {...props} />}
        </>
    )
}

export default ButtonComponent
