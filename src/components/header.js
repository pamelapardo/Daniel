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
          <Link to='/galerie'><h6 className='header-text2'>Galerie</h6></Link>
        </div>
        <div>
          <Link to='/monHistoire'><h6 className='header-text3'>Mon histoire</h6></Link>
        </div>
        <div>
          <Link to='/poesie'> <h6 className='header-text4'>Poesie</h6> </Link>
        </div>
      </div>
    </div>
  );
}
