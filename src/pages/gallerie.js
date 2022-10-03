import React from 'react';
import Header from '../components/header';
import Brush2 from '../images/brush2.png'
import Painting1 from '../paintings/peinture1.jpg'
import Painting2 from '../paintings/peinture2.jpg'
import Painting3 from '../paintings/peinture3.jpg'
import Painting4 from '../paintings/peinture4.jpg'
import Painting5 from '../paintings/peinture5.jpg'
import Painting6 from '../paintings/peinture6.jpg'
import Painting7 from '../paintings/peinture7.jpg'
import Painting8 from '../paintings/peinture8.jpg'
// import Painting9 from '../paintings/peinture9.jpg'
// import Painting10 from '../paintings/peinture10.jpg'
// import Painting11 from '../paintings/peinture11.jpg'
// import Painting12 from '../paintings/peinture12.jpg'
// import Painting13 from '../paintings/peinture13.jpg'
// import Painting14 from '../paintings/peinture14.jpg'
// import Painting15 from '../paintings/peinture15.jpg'
// import Painting16 from '../paintings/peinture16.jpg'
// import Painting17 from '../paintings/peinture17.jpg'
// import Painting18 from '../paintings/peinture18.jpg'
// import Painting19 from '../paintings/peinture19.jpg'

export default function Gallerie (props) {
  return (
    <div className=' scroll'>
      <Header/>
      <div className='gallerie-body'>
        <h1>Gallerie</h1>
        <div>
          <img className='brush2' src={Brush2} alt='brush'/>
        </div>
        {/* <div className='container'>
          <div className='d-flex flex-wrap me-3 ms-3'>
            <div className='col-4 p-3'>
              <img className='painting' src={Painting1} alt='peinture'/>
            </div>
            <div className='col-4 p-3'>
              <img className='painting' src={Painting2} alt='peinture'/>
            </div>
            <div className='col-4 p-3'>
              <img className='painting' src={Painting3} alt='peinture'/>
            </div>
            <div className='col-4 p-3'>
              <img className='painting' src={Painting4} alt='peinture'/>
            </div>
            <div className='col-4 p-3'>
              <img className='painting' src={Painting5} alt='peinture'/>
            </div>
            <div className='col-4 p-3'>
              <img className='painting' src={Painting6} alt='peinture'/>
            </div>
            <div className='col-4 p-3'>
              <img className='painting' src={Painting7} alt='peinture'/>
            </div>
            <div className='col-4 p-3'>
              <img className='painting' src={Painting8} alt='peinture'/>
            </div>
          </div> 
        </div>*/}
        <div className='paintings_container'>
        <img className='painting' src={Painting1} alt='peinture'/>
        <img className='painting' src={Painting8} alt='peinture'/>
        <img className='painting' src={Painting7} alt='peinture'/>
        <img className='painting' src={Painting5} alt='peinture'/>
        <img className='painting' src={Painting3} alt='peinture'/>
        <img className='painting' src={Painting4} alt='peinture'/>
        </div>
      </div>
    </div>
  );
};
