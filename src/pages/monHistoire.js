import React from 'react';
import Header from '../components/header';
import Brush3 from '../images/brush3.png'
import Dd1 from '../images/daniel1.jpg';
import Dd2 from '../images/daniel2.png';
import Dd3 from '../images/daniel3.jpg';
import Livre from '../images/livre.jpeg';
import Footer from '../components/footer'
import 'aos/dist/aos.css';

function MonHistoire() {
  return (
    <div className=' scroll'>
      <Header />
      <div data-aos="fade-down" className='galerie-body pb-5'>
        <h1>Son histoire</h1>
        <div>
          <img className='brush2 mb-3' src={Brush3} alt='brush' />
        </div>
        <div className='container mt-4'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <h3> Daniel, une personne attachante… </h3>
              <p className='p-text-histoire text-justify'>
                Roulement de tambours !! Oyez braves gens ! Voici l'histoire insolite et sidérante d'un homme dont l'adolescence s'inscrit par un vécu digne de celui d'Edmond Dantes et qui a 75 ans revient régler ses comptes avec l'Etat ! Bien que né en Normandie il vit a Nice en l'immeuble le Monte Cristo !<br/>
                Apte a une vie paradoxale initiatique en cite d'urgence il est vite aguerri enfant aux épreuves en cadet utile d'une fratrie hétéroclite de 5 enfants, il sera l'épaule d'une mère aimante, mater dolorosa sacrifiée sur l'autel du dévouement à la famille, comme le voulaient les usages et un père charismatique mais dur et toxique et qui bien qu'il ne l'aimera jamais vraiment l'utilisera dès 12 ans pour le seconder dans son attraction de forain sédentaire sur les fêtes de village ! Une riche expérience enfantine qui en fera un roi de la débrouillardise a la faveur de son intelligence vive,l'idéal même de la nature humaine l'éloignant des effets pervers du pouvoir de l'argent ! <br/>
                Bien que brillant premier en classe de primaires le père s'opposera a la voix du collège et le voilà marqué au fer rouge par son appartenance sociale inférieure a 14 ans ! <br/>
                Ses humanités, il les fera à l'école de la vie dans la rue ! Débrouillard patenté et prolixe il devient apprenti électricien a l'usine Moulinex sans fréquenter la fine fleur de la jeunesse Alençonnaise !<br/>
                Un écart générateur d'un terrible incident dévastateur car illégal et injuste (incarcération arbitraire sans délit constitué !) qu'il nous  révèle dans son autobiographie en fait marqueur point final irrémédiable de son innocente adolescence qu'on expédiera d'un mode obligé dans la marine nationale a 18 ans (sous-marins)!<br/>
                Dumas et Hugo,Zola et Maupassant auraient pu écrire moult des pans colorés âpreté de l'existence de l'homme accompli, atypique et hyper résilient dans le fil de sa vie ombre et lumière!<br/>
                L'ex-baroudeur dans son oeuvre nous déroule outre son vécu sa fibre artististique étendue (Peintre, auteur, poete,comédien,animateur "Club Med"et éducateur a la Dass) ! On ne peut que le suivre dans le récit fabuleux de son histoire à travers : "Mémoires sidérantes d'un Alençonnais" ecrit d'une plume agile trempée dans l'humour et l'authenticité.<br/>
                Surtout, Suivez le ! <br/><br/>
                Il vous étonnera et vous portera dans des situations que peu d'êtres ont pu vivre et il vous attirera dans le monde de l'audace et des prouesses ou dans les dégringolades assumées avec un mental unique et enviable.<br/>
                La motivation de son aveu est une mise en garde pour la jeunesse qu'il a fréquenté en éducateur référencé et dont il connaît les travers ne fusse que celui qui l'a fait aller au trou pour mieux en ressortir dans la lumière soulignant cette mise en garde à ceux qui ne doivent pas s'égarer s'ils sont fragiles !<br/>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 right-then-center'>
              <img src={Dd1} className='dd-image' alt='daniel' />
            </div>
            <div className='col-6 left-then-center'>
              <p className='p-text text-white italic'>Le “jeu de boule” de son père forain.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='galerie-body'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <h3>Un personnage haut en couleurs</h3>
              <p className='p-text-histoire text-justify'>Une enfance marquée par la vie dans une cité d'urgence qui a dégénéré en une adolescence agitée et instable, menant à des événements traumatiques qui ont causé de la souffrance et des vexations.<br />
                Malgré cela, il a maintenu une coherence mentale absolue, une honnêteté, une sincérité et une volonté farouche de sauver sa vie, aidé en cela par une mémoire et une vivacité d'esprit remarquables.<br />
                Si on le comprend, il est facile de vivre avec lui, il est volontiers singulier et jovial, constant et positif.<br />
                Il est résilient et altruiste, et s'intéresse à tout, y compris à lui-même de manière débordante, presque provocante,<br />
                Mais restant un bon humaniste qui se montre généreux et empathique.<br /></p>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 right-then-center'>
              <img src={Dd2} className='dd2' alt='daniel' />
            </div>
            <div className='col-6 right-then-center-text'>
              <p className='p-text text-white italic citation'>“Je suis un conquérant du beau.”</p>
            </div>
          </div>
        </div>
      </div>
      <div className='galerie-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h3>Son histoire. Une révélation, prochainement disponible :</h3>
              <p className='p-text-histoire text-justify pe-5'>Une œuvre édifiante relatant un sort semblable à celui d'Edmond Dantès ou Jean Valjean!<br />
                C'est le récit d'une vie atypique et d'un destin chaotique d'un adolescent venu du monde forain qui a été spécialement malmené.<br />
                Pourtant, le héros a réussi à assurer sa vie avec brio.<br />
                Il nous montre comment transcender ses blessures morales pour maîtriser sa vie et repousser l'adversité, afin de finalement trouver le chemin de la liberté intérieure.<br />
                Il sait ce que la liberté signifie ! Le récit captivant nous emmène dans un monde où personne d'autre ne va. <br />
                C'est une histoire sidérante où l'insolite et l'émotion sont au rendez-vous à travers ce livre profond qui nous interroge !<br />
                Découvrez son livre, la révélation sidérante et édifiante, l'histoire fascinante d'un homme extraordinaire, qui a su rester humble néanmoins, Daniel Deschamps :<br /></p>
            </div>
            <div className='col-6'>
              <div className='right-then-center-text'>
                <img className='livre' src={Livre} alt='page' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 right-then-center'>
              <img src={Dd3} className='dd2' alt='daniel' />
            </div>
            <div className='col-6 right-then-center-text'>
              <p className='p-text text-white italic citation'>“Toujours être le précurseur, le visionaire.”</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MonHistoire;