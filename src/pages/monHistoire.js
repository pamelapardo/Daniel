import React from 'react';
import Header from '../components/header';
import Brush3 from '../images/brush3.png'
import Dd1 from '../images/daniel1.jpg';
import Dd2 from '../images/daniel2.png';
import Dd3 from '../images/daniel3.jpg';
import Livre from '../images/livre.png';
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
              <p className='p-text-histoire text-justify'>Daniel Deschamps est une personne extraordinaire !...<br/>
                Avide d'évolution,l'homme accompli baroudeur puis très bien intégré aujourd'hui est unique de par son histoire et sa résilience face aux événements les plus déroutants. servis par son destin insolent à répétition qu'ils soient administratifs ou médicaux ou conjugaux ! Déterminé et résilient il traverse les pires épreuves en gardant son sourire séduisant une de ses qualités et son attachement aux valeurs morales intégrant humanisme et humilité préservée.Cette dernière malgré sa montée des marches de l'échelon social que seules des atteintes corporelles ou bombes sentimentales imprévisibles à répétition traversent telles des épreuves ravageuses qui le font grandir !...L'ancien matelot de 1966 à 1969 reste droit dans ses bottes et garde une posture altière qui lui va bien à ce grand bonhomme diplomate et taquin aussi venu de Normandie en Mai 1948 à Alençon 61000.<br/>
                L'ancien mataf-comédien et animateur au Club affiche une intelligence vive détentrice d'une mémoire surprenante source intarissable de son flow d'écrivain éloquent.Fantaisiste dans l'âme, doté d'une nature artistique soutenue (peinture - écriture - poésie - théâtre et animation) Daniel réalise en bon rationnel patenté de nombreux projets immobiliers et ne s'en targue pas !..Brillant autodidacte venu d'un environnement plus que populaire puisque fils de forain sédentaire hors normes il collectionne les bons diplômes et les bonnes références voir newdim.site !...On pourrait dire qu'il est une "boule à mille facettes" sur laquelle la lumière de la chance s'attarde aussi et c'est tant mieux ! L'être jovial et sympathique séducteur est difficile à classer dans une seule catégorie ou de le décrire de manière simple,au point qu'il ferait pâlir le camouflage du caméléon ne vieillit jamais,c'est dans sa nature de phénix-survivant !..Artiste dans l'âme et doté de son esprit intuitif il a tout pour s'adapter,créer, transformer et surtout évoluer sans cesse tout en restant jeune !
                (voir son autobiographie unique en son genre "Mémoires sidérantes d'un Alençonnais" dans laquelle il se livre à nu et développe son passé le plus insolite qui soit !.. <br/>
                Gravement malade à plusieurs reprises, il reste invaincu de tout fléau en un invincible auto-régénérateur ! S'il est devenu "Survivor" il le doit à sa personnalité,à sa façon de penser et à son mental fort qui lui ont permis de surmonter les obstacles grâce à sa détermination,sa ténacité et son inventivité issue dès son enfance festive qui le pousse à faire de son environnement un avantage.Sa devise d'initié est qu'il faut savoir tirer le meilleur du pire pour se montrer en Arlequin rebondissant plutôt  qu'en Pierrot attristé.De cette riche atmosphère,à 12 ans seulement,il comprendra vite déjà le fonctionnement de l'argent et des gens.A l'instar de son père ,charismatique lui aussi,Il sait inventer les slogans grâce à sa maîtrise de l'outil du langage et de son élocution et,plus généralement,il applique les règles fondamentales qui régissent notre société tout naturellement. <br/>
                Sa vie est un film unique à découvrir.C'est un être attachant de naturel, il est et c'est une personnalité insolite et captivante = Votez pour lui ! <br/>
                </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 d-flex justify-content-end'>
              <img src={Dd1} className='dd-image' alt='daniel'/>
            </div>
            <div className='col-6 d-flex align-items-center'>
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
                La séduction est ancrée dans son ADN d'amoureux de tous les instants, il multiplie les liaisons, les aventures et les mariages. C'est un vagabond de l'amour. <br/>
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
            <div className='col-6 d-flex justify-content-end'>
              <img src={Dd2} className='dd2' alt='daniel'/>
            </div>
            <div className='col-6 d-flex align-items-center'>
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
              <div className=''>
                <img className='livre' src={Livre} alt='page'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 d-flex justify-content-end'>
              <img src={Dd3} className='dd2' alt='daniel'/>
            </div>
            <div className='col-6 d-flex align-items-center'>
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