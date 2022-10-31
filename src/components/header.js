import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <div className='container'>
      <div className='d-flex justify-content-end'>
        
        <div>
          <Link to='/'><h6 className='header-text1'>Home</h6></Link>
        </div>
        <div>
          <Link to='/gallerie'><h6 className='header-text2'>Gallerie</h6></Link>
        </div>
        <div>
          <Link to='/monHistoire'><h6 className='header-text3'>Mon histoire</h6></Link>
        </div>
        <div>
          <h6 className='header-text4'>Poesie</h6>
        </div>
      </div>
    </div>
  );
}
