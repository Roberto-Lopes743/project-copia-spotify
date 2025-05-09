import React from 'react'
import Logo from './img/spotify-logo.png'
const Header = () => {
    return (
        <nav className='Header'>
            <img src={Logo} alt="logo do spotify" />
            <h1>
                <a href="">
                    Spotify
                </a>
            </h1>
        </nav>
    )
}

export default Header