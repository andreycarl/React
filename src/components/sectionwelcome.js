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
        <div className='formregister'>
            <form className="form">
                <h1 className="title">Registrate Gratis</h1>
                <p className="subtitle">!Haz click aqui y adquiere la oportunidad de superarte!</p>
                <div className="inputform">
                    <input type="text" class="input" placeholder="Text" />
                </div>
                <div className="inputform">
                    <input type="text" class="input" placeholder="Text" />
                </div>
                <input type="submit" class="submitbtn" value="Empezar" />
            </form>
        </div>       
      </div>
    </div>
  )
}

export default sectionwelcome;