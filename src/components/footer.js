import React from 'react';

export default function Footer () {
  return (
    <div className='footer-container'>
      <div className='d-flex'>
        <div className='me-2 footer-contact'>
          <p className='footer-contact-text'>06 18 76 15 19</p>
          <a href="mailto:contact@daniel-deschamps.fr" className='footer-contact-text'>contact@daniel-deschamps.fr</a>
        </div>
        <div className=''>
          <h4 className='footer-title1 color-red'>Daniel</h4>
          <h4 className='footer-title1'>Deschamps</h4>
        </div>
      </div>
      <div>
        <a href="mailto: pixolabcontact@gmail.com" className='contact-pixolab'>Par pixolabcontact@gmail.com. Tous droits réservés.</a>
      </div>
    </div>
  );
}
