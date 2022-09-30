import React from 'react';
import Brush2 from '../images/brush2.png'

export default function Header () {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>

        </div>
        <div className='col-4'>
          <div className='d-flex'>
            
            <div>
              <h6 className='header-text'>Home</h6>
              {/* <div className='brush2-hidden'>
                <img className='brush2' src={Brush2} alt='brush'/>
              </div> */}
            </div>

            <div>
              <h6 className='header-text'>Gallerie</h6>
            </div>
            <div>
              <h6 className='header-text'>Mon histoire</h6>
            </div>
            <div>
              <h6 className='header-text'>Poesie</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
