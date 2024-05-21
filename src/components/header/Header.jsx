import React, { useLayoutEffect, useState } from 'react'
import { TiThMenu } from "react-icons/ti"
import { ReactComponent as TrackingLogo } from '../../assets/svgs/trackingLogo.svg';
import { ReactComponent as BrandLogo } from '../../assets/svgs/brandLogo.svg';
import Navigation from './Navigation';
import NavigationRes from "./NavigationRes"
import "./index.css"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    useLayoutEffect(() => {
        setShowMenu(true)
    }, [])
    return (<>
        <div className='d-flex align-items-center justify-content-between header-container'>
            <div className='d-flex align-items-center'><h1 className='brand-name'>Track you order</h1> <TrackingLogo /></div>
            <BrandLogo />
            <Navigation />
            {!showMenu && <div className='menu-btn' onClick={() => setShowMenu(!showMenu)}>
                <TiThMenu size={35} />
            </div>}
        </div>
        {showMenu && <NavigationRes showMenu={showMenu} setShowMenu={setShowMenu} />}
    </>)
}

export default Header
