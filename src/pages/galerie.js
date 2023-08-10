import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import ImageComponent from '../components/image';

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
import P38 from '../paintings/p38.png'
import '../styles/modal.scss'
import Footer from '../components/footer';
import Popup from './popup'

const paintingArray = [
  {image:P1, imageTitle:'Reveuse à la plage',imageText:'Acrylique et brosse, 2000.'},
  {image:P2, imageTitle:'Retour de pêche',imageText:'Acrylique et brosse, 2015.'},
  {image:P3, imageTitle:'Piscine romaine mar CALVI',imageText:'Dessin papier, 1999.'},
  {image:P4, imageTitle:'Pinasse et voile enroulée',imageText:'Acrylique et brosse, 1999.'},
  {image:P5, imageTitle:'Pinasse en canal',imageText:'Acrylique support bois tissus, 1998.'},
  {image:P6, imageTitle:'Mosquée de Sidi Bou SAID',imageText:'Acrylique et brosse, 2000.'},
  {image:P7, imageTitle:'Les WC de la prison',imageText:'Acrylique et brosse, 2000.'},
  {image:P8, imageTitle:'Les roulottes',imageText:'Couteau lissé et Huile, 1976.'},
  {image:P9, imageTitle:'Le parcmetre',imageText:'Huile et brosse, 1975.'},
  {image:P10, imageTitle:'Le limonaire',imageText:'Acrylique et brosse, 1999.'},
  {image:P11, imageTitle:'Le lard de la table',imageText:'Acrylique et brosse, 1999.'},
  {image:P12, imageTitle:'Le gitan',imageText:'Huile et brosse, 1982.'},
  {image:P13, imageTitle:'Le bilboquet',imageText:'Huile et brosse, 1989.'},
  {image:P14, imageTitle:'La cuisse',imageText:'Acrylique et brosse, 2018.'},
  {image:P15, imageTitle:'Inconnue vision fougue',imageText:'Acrylique et brosse, 2005.'},
  {image:P16, imageTitle:'Coucher de soleil voilé',imageText:'Dessin au stabylo 2015.'},
  {image:P17, imageTitle:'Rue Guétal Grenoble',imageText:'Dessin crayons couleurs 2015.'},
  {image:P18, imageTitle:'Grange a Revel',imageText:'Acrylique et brosse, 2002.'},
  {image:P19, imageTitle:'Fresque de nus',imageText:'Acrylique et brosse, 1999.'},
  {image:P20, imageTitle:'Flou de bassan',imageText:'Acrylique et brosse, 1999.'},
  {image:P21, imageTitle:'La barque rouge',imageText:'Acrylique sur bois/tisus-brosse, 2013.'},
  {image:P22, imageTitle:'Fleurs et livre',imageText:'Acrylique sur papier toile, 2001.'},
  {image:P23, imageTitle:'Fleur fanée',imageText:'Couteau lissé et huile sur jute, 1976.'},
  {image:P24, imageTitle:'Fleur de magnolia',imageText:'Carton toile acrylique, 2000.'},
  {image:P25, imageTitle:'Enfant clown',imageText:'Couteau lissé et huile, 1981.'},
  {image:P26, imageTitle:'Covid 2021',imageText:'Acrylique et brosse, 2021.'},
  {image:P27, imageTitle:'Coucher de soleil',imageText:'Couteau lissé, 1976.'},
  {image:P28, imageTitle:'Christ revenant',imageText:'huile et brosse, 1976.'},
  {image:P29, imageTitle:'Chatte sur toit de Paris',imageText:'Gouache sur bois, année de création inconue.'},
  {image:P30, imageTitle:'Chapelle Bagnoles en Forêt',imageText:'Brosse, 1999.'},
  {image:P31, imageTitle:'Cabane landaise sur bois drapé',imageText:'Acrylique et brosse, année de création inconue.'},
  {image:P32, imageTitle:'Bateaux Grau du Roy',imageText:'Acrylique et brosse, année de création inconue'},
  {image:P33, imageTitle:'Anamorphose du clown malheureux',imageText:'Huile et brosse, 1969.'},
  {image:P34, imageTitle:'Barques rangées',imageText:'Aquarelle, 1997.'},
  {image:P35, imageTitle:'Barques à Zarzis tunisie',imageText:'Aquarelle, 2000.'},
  {image:P36, imageTitle:'Mosquée de Sidi bou Said',imageText:'Aquarelle, 2000.'},
  {image:P37, imageTitle:'Barques à Zarzis tunisie',imageText:'Aquarelle, 2000.'},
  {image:P38, imageTitle:'Sabots de Venus',imageText:'Acrylique et brosse, 2005.'},
]

export default function Galerie(props) {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className=' scroll'>
      {loading ? (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
      ):(<div>
      <Popup/>
      <Header />
      <div className='galerie-container'>
        <h1>Galerie</h1>
        <div>
          <img className='brush2' src={Brush2} alt='brush' />
        </div>
        <div data-aos="fade-down" className='paintings_container'>

          {
            paintingArray.map((imageSrc, index) => {
              return <ImageComponent
                key={index}
                image={imageSrc.image}
                imageTitle={imageSrc.imageTitle}
                imageText={imageSrc.imageText}
              />
            })
          }
        </div>
      </div>
      <Footer/>
      </div>)}
    </div>
  );
};
