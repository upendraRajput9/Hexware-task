import React from 'react'
import { NavLink } from 'react-router-dom';

const Navigation = ({ type, showMenu, setShowMenu }) => {
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
        <nav>
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

export default Navigation
