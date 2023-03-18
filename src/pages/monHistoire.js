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
      <Header/>
      <div data-aos="fade-down" className='galerie-body pb-5'>
        <h1>Son histoire</h1>
        <div>
          <img className='brush2 mb-3' src={Brush3} alt='brush'/>
        </div>
        <div className='container mt-4'>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <h3> Daniel, une personne attachante… </h3>
              <p className='p-text-histoire text-justify'>Daniel Deschamps est une personne extraordinaire croyez le bien !<br/>
                Insatiable curieux et devenu cultivé l'homme accompli, ancien baroudeur, s'intégrera vite socialement lui dont l'histoire est unique !<br/>
                C'est du Jean Valjean, et comme Edmond Dantès c'est un ancien marin au parcours insolite et à la résilience exceptionnelle face aux événements les plus déroutants servis par son destin insolent à répétition et ce tout azimuts sans jamais l'abattre !... <br/>
                Déterminé, il traverse les pires épreuves en gardant son sourire séduisant. Une de ses qualités premières et son attachement aux valeurs morales intégrant humanisme et humilité préservée qui lui ouvrent nombre de portes fermées pour autrui, car il est lui-même son propre Sésame charismatique !...<br/>
                Parti de nulle part il monte très haut malgré des atteintes corporelles ou désintégrations sentimentales imprévisibles à répétition qui traversent telles de ravageuses expérimentations sa vie et le qui font grandir !<br/>
                L'ancien matelot sous-marinier de 1966 à 1969 reste droit dans ses bottes face aux tempêtes existentielles en gardant une allure altière tel un diplomate à la Talleyrand, taquin et subtile, ce fils de forain né en Normandie en Mai 1948 à Alençon - 61000.<br/>
                Le touche à tout réussit inexorablement que ce soit comme comédien ou animateur au Club ou encore peintre et ou auteur dont la mémoire vive est une source de flow intarissable d'éloquence et de fantaisie.Autodidacte venu d'un monde de forain sédentaire hors normes il collectionne néanmoins diplômes et bonnes références voir newdim.site.<br/>
                On pourrait dire qu'il est une "boule à mille facettes" chopant les rayons lumineux de la chance qui remplace la guigne et c'est tant mieux pour lui !<br/>
                L'être jovial et sympathique est difficilement affectable à une seule catégorie ou à décrire de manière simple, au point qu'il ferait pâlir le camouflage du caméléon, lui qui ne vieillit jamais, car c'est dans sa nature de phénix-survivant !<br/>
                Artiste dans l'âme, à  l'esprit intuitif il excelle pour s'adapter, créer, transformer et surtout évoluer sans cesse tout en restant jeune ! (voir son autobiographie unique en son genre: "Mémoires sidérantes d'un Alençonnais" dans laquelle il se livre à nu et développe son passé le plus insolite qui soit !...)<br/>
                Plusieurs fois fauché par de graves maladies, il reste néanmoins invaincu de leurs attaques tel un invincible auto-régénérateur devenu "Survivor" un titre qu'il doit à sa personnalité, sa façon de penser et son mental fort qui le font apparaitre plus en un Arlequin rebondissant plutôt qu'un Pierrot attristé adossé à la lune.<br/>
                Initié à l'école de la vie l'homme franc surmonte les obstacles armé de sa ténacité et son inventivité issue de son enfance festive. <br/>
                Il saura faire de son environnement originel un avantage lui qui a appris à tirer le meilleur du pire !... Dès son enfance à 12 ans seulement,oeuvrant sur les fêtes il comprenait déjà le fonctionnement de l'argent et des gens.<br/>
                A l'instar de son père charismatique lui aussi mais toxique, Il invente les slogans grâce à son talent d'ancien bateleur se montrant s'il le faut orateur et appliquant avec sérieux les règles fondamentales qui régissent notre société tout naturellement.<br/>
                ***<br/>
                Sa vie est un film unique à découvrir !...C'est un être attachant, il est et c'est évident une personnalité insolite et captivante, votez pour lui en optant pour son livre révolte !<br/>
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 right-then-center'>
              <img src={Dd1} className='dd-image' alt='daniel'/>
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
              <p className='p-text-histoire text-justify'>Une enfance marquée par la vie dans une cité d'urgence qui a dégénéré en une adolescence agitée et instable, menant à des événements traumatiques qui ont causé de la souffrance et des vexations.<br/>
                Malgré cela, il a maintenu une coherence mentale absolue, une honnêteté, une sincérité et une volonté farouche de sauver sa vie, aidé en cela par une mémoire et une vivacité d'esprit remarquables.<br/>
                La séduction est ancrée dans son ADN d'amoureux de tous les instants, il multiplie les liaisons et les aventures. C'est un vagabond de l'amour. <br/>
                Si on le comprend, il est facile de vivre avec lui, il est volontiers singulier et jovial, constant et positif.<br/>
                Il est résilient et altruiste, et s'intéresse à tout, y compris à lui-même de manière débordante, presque provocante,<br/>
                Mais restant un bon humaniste qui se montre généreux et empathique.<br/></p>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 right-then-center'>
              <img src={Dd2} className='dd2' alt='daniel'/>
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
              <p className='p-text-histoire text-justify pe-5'>Une œuvre édifiante relatant un sort semblable à celui d'Edmond Dantès ou Jean Valjean!<br/>
                C'est le récit d'une vie atypique et d'un destin chaotique d'un adolescent venu du monde forain qui a été spécialement malmené.<br/>
                Pourtant, le héros a réussi à assurer sa vie avec brio.<br/>
                Il nous montre comment transcender ses blessures morales pour maîtriser sa vie et repousser l'adversité, afin de finalement trouver le chemin de la liberté intérieure.<br/>
                Il sait ce que la liberté signifie ! Le récit captivant nous emmène dans un monde où personne d'autre ne va. <br/>
                C'est une histoire sidérante où l'insolite et l'émotion sont au rendez-vous à travers ce livre profond qui nous interroge !<br/>
                Découvrez son livre, la révélation sidérante et édifiante, l'histoire fascinante d'un homme extraordinaire, qui a su rester humble néanmoins, Daniel Deschamps :<br/></p>
            </div>
            <div className='col-6'>
              <div className='right-then-center-text'>
                <img className='livre' src={Livre} alt='page'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 right-then-center'>
              <img src={Dd3} className='dd2' alt='daniel'/>
            </div>
            <div className='col-6 right-then-center-text'>
              <p className='p-text text-white italic citation'>“Toujours être le précurseur, le visionaire.”</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MonHistoire;