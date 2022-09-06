import React from 'react';
import './SectionMoreInf.css';

function SectionMoreInf() {
  return (
    <div className='sectionmoreinf'>
        <div className='certificate'>
            <div className='textcertificate'>
            <p className='tcertificate'>Certificados de las mejores universidades y compañías</p>
            </div>
        </div>
        <div className='gray'></div>
        <div className='moreinfo'>
            <div className='buttonregister'>
                <input type="submit" class="submitbtnregister" value="Mas información" />
            </div>
        </div>
    </div>
  )
}

export default SectionMoreInf;
