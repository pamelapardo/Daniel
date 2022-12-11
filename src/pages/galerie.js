import React, { useState } from 'react';
import Header from '../components/header';
import Modal from '../components/modal';
import ImageComponent from '../components/image';
import ImageModal from '../components/ImageModal';

import Brush2 from '../images/brush2.png'
import P1 from '../paintings/p1.jpg'
import P2 from '../paintings/p2.jpg'
import P3 from '../paintings/p3.jpg'
import P4 from '../paintings/p4.jpg'
import P5 from '../paintings/p5.jpg'
import P6 from '../paintings/p6.jpg'
import P7 from '../paintings/p7.jpg'
import P8 from '../paintings/p8.jpg'
import P9 from '../paintings/p9.jpg'
import P10 from '../paintings/p10.jpg'
import P11 from '../paintings/p11.jpg'
import P12 from '../paintings/p12.jpg'
import P13 from '../paintings/p13.jpg'
import P14 from '../paintings/p14.jpg'
import P15 from '../paintings/p15.jpg'
import P16 from '../paintings/p16.jpg'
import P17 from '../paintings/p17.jpg'
import P18 from '../paintings/p18.jpg'
import P19 from '../paintings/p19.jpg'
import P20 from '../paintings/p20.jpg'
import P21 from '../paintings/p21.jpg'
import P22 from '../paintings/p22.jpg'
import P23 from '../paintings/p23.jpg'
import P24 from '../paintings/p24.jpg'
import P25 from '../paintings/p25.jpg'
import P26 from '../paintings/p26.jpg'
import P27 from '../paintings/p27.jpg'
import P28 from '../paintings/p28.jpg'
import P29 from '../paintings/p29.jpg'
import P30 from '../paintings/p30.jpg'
import P31 from '../paintings/p31.jpg'
import P32 from '../paintings/p32.jpg'
import P33 from '../paintings/p33.jpg'
import P34 from '../paintings/p34.jpg'
import P35 from '../paintings/p35.jpg'
import P36 from '../paintings/p36.jpg'
import P37 from '../paintings/p37.jpg'
import '../styles/modal.scss'

const paintingArray = [
  P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19,
  P20, P21, P22, P23, P24, P25, P26, P27, P28, P29, P30, P31, P32, P33, P34, P35, P36, P37
]

export default function Galerie(props) {
  return (
    <div className=' scroll'>
      <Header />
      <div className='galerie-body'>
        <h1>Galerie</h1>
        <div>
          <img className='brush2' src={Brush2} alt='brush' />
        </div>
        <div className='paintings_container'>

          {
            paintingArray.map((imageSrc, index) => {
              return <ImageComponent
                key={index}
                image={imageSrc}
                imageTitle={`Image ${index}`}
                imageText={`lorem ispum ameno ${index}`}
              />
            })
          }

          {/* <button className='painting-size' >
            <img className='painting' src={P3} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P3} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P4} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P4} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P5} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P5} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P6} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P6} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P7} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P7} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P8} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P8} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P9} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P9} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P10} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P10} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P11} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P11} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P12} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P12} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P13} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P13} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P14} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P14} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P15} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P15} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P16} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P16} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P17} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P17} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P18} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P18} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P19} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P19} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P20} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P20} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P21} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P21} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P22} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P22} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P23} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P23} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P24} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P24} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P25} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P25} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P26} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P26} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P27} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P27} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P28} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P28} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P29} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P29} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P30} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P30} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P31} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P31} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P32} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P32} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P33} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P33} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P34} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P34} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P35} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P35} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P36} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P36} onClose={() => setShow(false)} show={show}/> */}

          {/* <button className='painting-size' >
            <img className='painting' src={P37} alt='peinture'/>
          </button> */}
          {/* <Modal peinture={P37} onClose={() => setShow(false)} show={show}/> */}
        </div>
      </div>
    </div>
  );
};
