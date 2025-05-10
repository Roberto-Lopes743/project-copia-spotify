import React from 'react'
import Logo from './img/spotify-logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav className='Header'>
            <a href="/home">
            <img src={Logo} alt="logo do spotify" />
            </a>
            <h1>
            <a href='/Home'>Spotify</a>
            </h1>
        </nav>
    )
}

export default Header