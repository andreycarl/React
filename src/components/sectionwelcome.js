import React from 'react';
import './sectionwelcome.css';
import { FaSearch } from "react-icons/fa";

function sectionwelcome() {
  return (
    <div className='sectionwelcome'>
      <div className='lefside'>
        <div className='text'>
            <p>Bienvenido a FORMASER</p>
            <p>Donde la excelencia es nuestro <br></br>norte y la prioridad eres tú.</p>
                <div className='bsearch'>
                    <input type="text" placeholder='Buscar cursos y más...'/>
                    <button><FaSearch /></button>
            </div>
        </div>

      </div>
      <div className='rightside'>
        hola
      </div>
    </div>
  )
}

export default sectionwelcome;
