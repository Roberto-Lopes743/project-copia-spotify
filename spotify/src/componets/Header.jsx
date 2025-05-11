import React from 'react'
import Logo from './img/spotify-logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav className='Header'>
            <Link to="/home">
            <img src={Logo} alt="logo do spotify" />
            </Link>
            <h1>
            <Link to='/Home'>Spotify</Link>
            </h1>
        </nav>
    )
}

export default Header