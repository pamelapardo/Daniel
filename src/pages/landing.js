import React from 'react';
import '../styles/landing.scss'
import Brush1 from '../images/brush1.png'
import Circle1 from '../images/circle1.png'
import Paintings from '../images/paintings.png'
import Marker from '../images/marker.png'
import Dd from '../images/DD.png'
import Histoire_paint from '../images/histoire-paint.png'
import Poesie_paint from '../images/poesie-paint.png'
import { Link } from 'react-router-dom';
import Galerie_paint from '../images/galerie-paint.png'

export default function Landing(props) {
  return (
    <div className='h-100'>
      <div class="container h-100">
        <div class="row h-100">

        <div className='circle-container'>
          <img className='circle1' src={Circle1} alt='circle'/>
        </div>

        <div class="col-6 overflow-none position-relative">
          <div className='paintings-container'>
            <Link to='/galerie'>
            <img className='paintings' src={Paintings} alt='paintings'/>
            <div className='galerie-paint' >
              <img src={Galerie_paint} alt="histoire-link"/>
            </div>
            </Link>
          </div>

          <div className='marker-container'>
            <Link to='/poesie'>
            <img className='marker' src={Marker} alt='marker'/>
            <div className='poesie-paint' >
              <img src={Poesie_paint} alt="histoire-link"/>
            </div>
            </Link>
          </div>

          <div className='dd-container'>
            <Link to='/monHistoire'>
            <img className='dd' src={Dd} alt='Daniel-Deschamps'/>
            <div className='histoire-paint' >
              <img src={Histoire_paint} alt="histoire-link"/>
            </div>
            </Link>
          </div>
        </div>


          <div class="col-6 mt-5 name-title">
            <h1 className='color-red'>Daniel</h1>
            <h1>Deschamps</h1>
            <div className='d-flex position-relative margin-brush'>
              <img className='brush1' src={Brush1} alt='brush'/>
              <div className='subtitle-container'>
                <p className='subtitle'>Peintre, poete, écrivain, animateur...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}