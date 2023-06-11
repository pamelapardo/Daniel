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
              <p className='p-text-histoire text-justify'>Daniel Deschamps est un être singulier, un insatiable curieux, sympathique et vaillant ! <br/>
                Notre homme accompli, ancien baroudeur, s'intègre vite socialement taisant unehistoire unique teintée à la Jean Valjean ou Edmond Dantès. <br/>
                Victime d'un abus de droit par un fonctionnaire zélé cet incident lui imposera à 18 ans à peine de s'engager comme marin puisque renié par son père forain sédentaire et il entamera à sa sortie un parcours insolite armé d'une résilience acier trempé face aux événements les plus déroutants d'un destin insolent et têtu et ce tous azimuts sans jamais l'abattre ! <br/>
                Déterminé, Daniel traversera les pires épreuves en gardant son sourire séduisant mais dérangeant ! Attaché aux valeurs telles l'humanisme et humilité préservées par son vécu et sa manière il se fera ouvrir moultes portes fermées pour autrui, se montrant lui-même son propre Sésame charismatique ! Las de barouder dès 27 ans il opte pour un parcours professionnel exemplaire malgré des atteintes corporelles ravageuses ou des désintégrations sentimentales imprévisibles et répétitives traversées dignement en solitaire qu'il désigne en fait comme des ravageuses expérimentations de sa vie et il assume ! L'ex matelot breveté électricien « sous - marinier » de 1966 à 1969 restera ensuite digne face aux tempêtes existentielles avec son port altier et sa verve de diplomate à la Talleyrand, taquin et subtile, ce fils de forain né en Normandie en début de seconde partie du siècle dernier à Alençon - 61000 - sera un bon touche-à-tout efficace ! <br/>
                A la mode caméléon il 'exprime en actes pluri directionnels inattendus et éphémères mais très enrichissants tels comédien (cours Simon), démonstrateur aux arts ménagers ou animateur au Club ou peintre et ou auteur de son autobiographie. Sa vie et sa mémoire vive se font source de flow éloquente et animée. Venu du monde festif e forain sédentaire hors normes il obtient un diplôme d'expert immobilier et s'habitue bien à la réussite sachant que parfois la lumière se coupe d'un coup ! <br/>
                En version "boule à mille facettes" il chope habilement les rayons lumineux de la chance qui remplacent guigne et déconvenues ! Tant mieux pour la personne optimiste, joviale et sympathique est difficilement affectable à une seule catégorie ou à décrire simplement car capable de faire pâlir le camouflage d'un caméléon, lui l'éternel jeune devenu sage avec sa nature de phénix-survivant à copier pour les êtres fragiles ! Artiste dans l'âme, à l'esprit intuitif il s'adapte, créer, transforme et surtout évoluer sans cesse en restant juvénile - (Voir son autobiographie d'un genre inattendu road-movie urbain intitulée : "Mémoires sidérantes d'un Alençonnais" où il se livre à nu et développe son passé le plus insolite qui soit !) <br/>
                Ateint à répétition par de graves maladies et resté invaincu de leurs attaques tel un invincible "Survivor" un titre issu de sa personnalité, sa façon de penser et son mental fort qui le font apparaitre plus en un Arlequin rebondissant plutôt qu'un Pierrot attristé. Initié à l'école de la vie, l'homme franc surmonte les divers obstacles pourvu de sa ténacité et son inventivité issue de son enfance festive. Son environnement originel devient un avantage pour lui qui a appris à tirer le meilleur du pire ! <br/>
                Dès son enfance à 12 ans œuvre sur les fêtes avec son père charismatique mais toxique et il comprend déjà le fonctionnement de l'argent et des gens matérialistes et moutons ! A l'instar de son père, Il invente des slogans percutants doté d'un don d'ancien bateleur se montrant s'il le faut orateur et appliquant avec sérieux les règles fondamentales qui régissent notre société tout naturellement. <br/>
                <br/>
                Sa vie est un film unique à découvrir ! Attachant il est avec sa personnalité insolite et captivante à suivre Il souhaite que son lectorat l'accompagne dans sa révolte à une injustice non révélée par le système établi de l'administration juridico-pénitentiaire dont le récit par un narrateur hors norme au vécu fantastique et ou sidérant vous captivera ! Surtout Suivez - le ! Il vous emmènera dans les prouesses ou dans les dégringolades assumées avec un mental unique et enviable. La motivation de son aveu est une mise en garde pour la jeunesse qu'il a fréquenté en éducateur référencé et dont il connaît les travers ne fusse que celui qui l'a fait aller au trou pour mieux en ressortir dans la lumière soulignant cette mise en garde à ceux qui ne doivent pas s'égarer s'ils sont fragiles ! <br/>
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