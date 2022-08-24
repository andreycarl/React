import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='lefside'>
            <div className='links'>
                <a href='/'>FORMASER LOGO</a>
            </div>
        </div>
        <div className='rightside'>
            <p className='separator'>|</p>
            <button className='blogin'>Iniciar Sesión</button>
            <button className='bregister'>Registro</button>
        </div>
    </div>
  )
}

export default Navbar;
