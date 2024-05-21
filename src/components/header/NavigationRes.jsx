import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdOutlinePlaylistRemove } from "react-icons/md";

const NavigationRes = ({ type, showMenu, setShowMenu }) => {
    const btnArray = [
        {
            name: "Home",
            navlink: '/'
        },
        {
            name: "Service",
            navlink: '/'
        },
        {
            name: "About Us",
            navlink: '/'
        },
        {
            name: " Login",
            navlink: '/'
        }
    ]
    return (<>
        <nav className='resposive-nav-bar'>
            <div className='flex-justify-end p-3 py-4'>
                <MdOutlinePlaylistRemove size={45} onClick={() => setShowMenu(!showMenu) }/>
            </div>
            <ul className='d-flex'>
                {btnArray.map(io => (<>
                    <li onClick={() => setShowMenu(false)}>
                        <NavLink exact to={io.navlink} activeClassName="active">
                            {io.name}
                        </NavLink>
                    </li>
                </>))}
            </ul>
        </nav>
    </>)
}

export default NavigationRes
