import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>

        </div>
        <div className='col-4'>
          <div className='d-flex'>
            
            <div>
              <Link to='/'><h6 className='header-text1'>Home</h6></Link>
            </div>
            <div>
              <Link to='/gallerie'><h6 className='header-text2'>Gallerie</h6></Link>
            </div>
            <div>
              <h6 className='header-text3'>Mon histoire</h6>
            </div>
            <div>
              <h6 className='header-text4'>Poesie</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
