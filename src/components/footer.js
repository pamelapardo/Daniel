import React from 'react';

export default function Footer () {
  return (
    <div className='footer-container'>
      <div className='d-flex'>
        <div className='me-2 footer-contact'>
          <p className='footer-contact-text'>06 18 76 15 19</p>
          <p className='footer-contact-text'>contact@daniel-deschamps.fr</p>
        </div>
        <div className=''>
          <h4 className='footer-title1 color-red'>Daniel</h4>
          <h4 className='footer-title1'>Deschamps</h4>
        </div>
      </div>
      <div>
        <p className='contact-pixolab'>Par pixolabcontact@gmail.com. Tous droits réservés.</p>
      </div>
    </div>
  );
}
