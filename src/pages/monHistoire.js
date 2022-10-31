import React from 'react';
import Header from '../components/header';
import Brush3 from '../images/brush3.png'
import Dd2 from '../images/dd2.png';
import Dd3 from '../images/dd3.png';

export default function Gallerie (props) {
  return (
    <div className=' scroll'>
      <Header/>
      <div className='gallerie-body'>
        <h1>Mon histoire</h1>
        <div>
          <img className='brush2' src={Brush3} alt='brush'/>
        </div>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-3'>
              <img src={Dd2} className='dd-image'/>
            </div>
            <div className='col-6'>
              <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra. Nulla malesuada pellentesque elit eget gravida. Amet tellus cras adipiscing enim eu turpis egestas. Ultricies mi quis hendrerit dolor magna eget est. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className='col-3 d-flex align-items-end justify-content-end'>
              <img src={Dd3} className='dd-image'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};