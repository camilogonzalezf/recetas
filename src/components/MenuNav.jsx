import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/MenuNav.scss';

const MenuNav = () => {
    return (
        <div className='menuNav'>
            <div className='menuNav-title'>
                <div>
                    <p>KUKS FRESH</p>
                </div>
            </div>
            <nav className='menuNav-menu'>
                <ul>
                    <li><NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? "activated" : "")}
                    to='/'> Home </NavLink></li>

                    <li><NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? "activated" : "")}
                    to='/nosotros'> Nosotros </NavLink></li>

                    <li><NavLink 
                    className={({ isActive }) => "nav-link" + (isActive ? "activated" : "")}
                    to='/videos'> Videos </NavLink></li>

                </ul>
            </nav>
        </div>
    );
}

export default MenuNav;