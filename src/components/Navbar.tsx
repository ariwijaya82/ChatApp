import React, { useState } from 'react';
import GoogleSignIn from '../assets/btn_google_signin_dark_pressed_web.png';

const NavBar = () => {
  const [user, setUser] = useState(false);
  const googleSignIn = () => {
    setUser(true);
  }

  const googleSignOut = () => {
    setUser(false);
  }

  return (
    <nav className='nav-bar'>
      <h1>React Chat</h1>
      {user ? <button></button> :
        <button></button>
      }
    </nav>
  )
}