import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import mainNavbarStyles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={mainNavbarStyles['main-nav']}>
            <div className={mainNavbarStyles['brand-logo']}>
                    <img src="src\assets\general\Authlogo.png" alt="" />                    
            </div>
            <div className={mainNavbarStyles['nav-paths']}>
                <NavLink to={'/'}>
                    Home
                </NavLink>
                <NavLink to={''}>
                    About
                </NavLink>
                <NavLink to={''}>
                    Features
                </NavLink>
                <NavLink to={'/regularstudent/login'}>
                    <button className={mainNavbarStyles['get-started-btn']}>
                        Get Started
                    </button>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar