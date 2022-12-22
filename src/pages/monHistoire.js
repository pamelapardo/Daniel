import React,{ useEffect } from 'react';
import Header from '../components/header';
import Brush3 from '../images/brush3.png'
import Dd1 from '../images/daniel1.jpg';
import Dd2 from '../images/daniel2.png';
import Dd3 from '../images/daniel3.jpg';
import Livre from '../images/livre.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function MonHistoire() {
 useEffect(() => {
    Aos.init({ 
      duration: 600,
      easing: 'ease',
      once: false });
 });
  return (
    <div className=' scroll'>
      <Header/>
      <div className='galerie-body pb-5'>
        <h1>Mon histoire</h1>
        <div>
          <img className='brush2 mb-3' src={Brush3} alt='brush'/>
        </div>
        <div className='container mt-4'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <h3> Daniel, un personnage littéralement extraordinaire… </h3>
              <p className='p-text-histoire text-justify'>Daniel Deschamps est une personne extraordinaire.<br/>
                Avide d'évolution, cet homme est unique, et je vais, humblement mais avec admiration, vous conter les prémices de sa ou de ses diverses vies, ici et là…<br/>
                Daniel est une personne qui a réalisé de nombreux projets et qui possède de nombreuses qualités et compétences. On pourrait dire qu'il est une "boule à mille facettes".<br/>
                C'est-à-dire, difficile à classer dans une seule catégorie ou de le décrire de manière simple, au point qu'il ferait pâlir le camouflage du caméléon.<br/>
                Daniel ne vieillit jamais, c'est dans sa nature de phénix-survivant! Artiste dans l'âme et doté d'une vive intelligence intuitive, il a tout pour s'adapter, créer, transformer et surtout évoluer.<br/>
                Daniel a vécu des épreuves infernales et saura subir une impensable injustice (voir le livre "La Strada d'un fils de forain").<br/>
                Gravement malade à plusieurs reprises, il reste et restera invaincu. Invincible, autorégénérateur !<br/>
                <br/>
                Tout cela, il le doit à sa personnalité, à sa façon de penser et à son mental fort qui lui ont permis de surmonter les obstacles grâce à sa détermination, sa ténacité et son inventivité.<br/>
                L'artiste né en 1948 à Alençon, issu d'une famille de forains sédentaires, a su dès son enfance festive faire de son environnement un avantage.<br/>
                Enfant de ce riche atmosphère, à 12 ans seulement, il comprenait déjà le fonctionnement de l'argent et des gens.<br/>
                Il sait inventer les slogans grâce à l'importance de l'élocution et, plus généralement, il applique les règles fondamentales qui régissent notre société.<br/>
                C'est ainsi qu'il s'arma et réussira, le plus souvent possible, tout ce qu'il peut entreprendre.<br/>
                Sa vie est un film unique à découvrir.<br/>
                <br/>
                Il a fait preuve d'une combativité et d'un courage exceptionnels, qui méritent d'être suivis, étudiés et imités.<br/>
                Une enfance marquée du sceau d'une cité d'urgence qui glisse vers une adolescence malmenée, intranquille dont la trame le conduira vers des événements traumatiques, générant souffrances infligées et vexations élévatrices !<br/>
                Il conserve malgré tout une cohérence mentale absolue, une honnêteté, une sincérité, une volonté farouche à vouloir sauver sa vie, servie en cela par une mémoire et une vivacité d'esprit remarquables.<br/>
                La séduction est inscrite dans son ADN d'amoureux de tous les instants, il multiplie les liaisons, les aventures, les mariages...<br/>
                C'est un vagabond de l'amour. Si on le comprend Il est facile de vivre avec lui, singulier volontiers et jovial! Constant et positif !<br/>
                En résilience forcenée et altruiste, il s'intéresse à tout dont à lui de façon débordante, presque provocatrice.<br/>
                <br/>
                Un peu agressif quand il le faut, un peu misogyne, transgressif, il se montre tout de même bon humaniste qui peut être généreux et empathique.<br/>
                Atypique, attachant, il est et c'est une personnalité extrême !!!<br/></p>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 d-flex justify-content-end'>
              <img src={Dd1} className='dd-image'/>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <p className='p-text text-white italic'>Le “jeu de boule” de son père forain.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='galerie-body pb-5'>
        <div className='container mt-5'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <h3>Un personnage haut en couleurs</h3>
              <p className='p-text-histoire text-justify'>Une enfance marquée par la vie dans une cité d'urgence qui a dégénéré en une adolescence agitée et instable, menant à des événements traumatiques qui ont causé de la souffrance et des vexations.<br/>
                Malgré cela, il a maintenu une coherence mentale absolue, une honnêteté, une sincérité et une volonté farouche de sauver sa vie, aidé en cela par une mémoire et une vivacité d'esprit remarquables.<br/>
                La séduction est ancrée dans son ADN d'amoureux de tous les instants, il multiplie les liaisons, les aventures et les mariages. C'est un vagabond de l'amour. <br/>
                Si on le comprend, il est facile de vivre avec lui, il est volontiers singulier et jovial, constant et positif.<br/>
                Il est résilient et altruiste, et s'intéresse à tout, y compris à lui-même de manière débordante, presque provocante.<br/>
                Il peut être un peu agressif quand c'est nécessaire, un peu misogyne et transgressif, mais il reste un bon humaniste qui peut être généreux et empathique.<br/>
                <br/>
                Atypique et attachant, c'est une personnalité extrême !!!<br/></p>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body pt-5 pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 d-flex justify-content-end'>
              <img src={Dd2} className='dd2'/>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <p className='p-text text-white italic citation'>“Je suis invincible, c'est simple, je suis un winner.”</p>
            </div>
          </div>
        </div>
      </div>
      <div className='galerie-body pb-5'>
        <div className='container pt-5'>
          <div className='row'>
            <div className='col-6'>
              <h3>Son histoire. Une révélation, prochainement disponible :</h3>
              <p className='p-text-histoire text-justify pe-5'>Une œuvre édifiante relatant un sort semblable à celui d'Edmond Dantès ou Jean Valjean!<br/>
C'est le récit d'une vie atypique et d'un destin chaotique d'un adolescent venu du monde forain qui a été spécialement malmené.<br/>
Pourtant, le héros a réussi à assurer sa vie avec brio.<br/>
Il nous montre comment transcender ses blessures morales pour maîtriser sa vie et repousser l'adversité, afin de finalement trouver le chemin de la liberté intérieure.<br/>
Il sait ce que la liberté signifie ! Le récit captivant nous emmène dans un monde où personne d'autre ne va. <br/>
C'est une histoire sidérante où l'insolite et l'émotion sont au rendez-vous à travers ce livre profond qui nous interroge !<br/>
Découvrez son livre, la révélation, l'histoire fascinante d'un homme extraordinaire, Daniel Deschamps :<br/></p>
            </div>
            <div className='col-6'>
              <div className=''>
                <img className='page' src={Livre} alt='page'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body pt-5 pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 d-flex justify-content-end'>
              <img src={Dd3} className='dd2'/>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <p className='p-text text-white italic citation'>“Toujours être le précurseur, le visionaire.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonHistoire;