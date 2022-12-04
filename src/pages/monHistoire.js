import React from 'react';
import Header from '../components/header';
import Brush3 from '../images/brush3.png'
import Dd1 from '../images/daniel1.jpg';
import Dd2 from '../images/daniel2.png';
import Dd3 from '../images/daniel3.jpg';
import Livre from '../images/livre.png'

export default function Galerie (props) {
  return (
    <div className=' scroll'>
      <Header/>
      <div className='galerie-body pb-5'>
        <h1>Mon histoire</h1>
        <div>
          <img className='brush2 mb-3' src={Brush3} alt='brush'/>
        </div>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-10'>
              <h3> Daniel, un personnage littéralement extraordinaire… </h3>
              <p className='p-text'>Daniel Deschamps est une personne extra-ordinaire. 
              Avide d'évolution, cet homme n'a rien du commun des mortels, et je vais, de ma simple plume vous conter les prémices de sa, où préférablement ses vies.
              <br/>
              Il est ce que l'on appelle une boule à mille facette, impossible à ranger dans une case il en fait pâlir le camouflage du caméléon.
              Daniel ne vieillit jamais, c'est dans sa nature.
              Artiste dans l'âme et doté d'une redoutable intelligence, il a tout pour s'adapter, créer, transformer mais surtout évoluer.
              Daniel à vécu l'enfer. Il subira d'innombrable injustice et sera gravement malade à de multiple reprise, il reste et restera invaincu, invincible. 
              Tout cela, il ne le doit qu'à sa propre personne, à sa philosophie de vie et son mental basé sur la résilience et la détermination.
              <br/>
              L'artiste est né en 1948. Issu d'une famille de forain sédentaire, il à tout de suite fait de son **environnement** un avantage. 
              Enfant de cette atmosphère richissime,  à 12 ans seulement il comprenait déjà le fonctionnement de l'argent, l'importance de l'élocution
              et plus généralement les règles fondamentales qui régissent notre société.
              C'est ainsi qu'il s'arma et réussira toujours tout ce qu'il entreprend. 
              Sa vie est un film unique à découvrir.
              Une combativitée et un courage exemplaire, à suivre et étudier.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={Dd1} className='dd-image'/>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <p className='p-text text-white italic'>Le “jeu de boule” de son père forain.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='galerie-body pb-5'>
        <div className='container mt-5 pt-5'>
          <div className='row>'>
            <div className='col-8'>
              <h3>Un personnage haut en couleurs</h3>
              <p className='p-text'>Une enfance inquiète , un service adolescence malmenée, intranquille dont la trame le conduira vers des événements traumatiques , 
              des souffrances infligées .Il conserve malgré tout une cohérence mentale absolue, une honnêteté ,une sincérité, 
              une volonté farouche à vouloir sauver sa vie,servie en cela par une intelligence et une vivacité d'esprit remarquables.
              Il à la séduction inscrite dans son ADN; amoureux de tous les instants, il multiplie les liaisons , les aventures ,les mariages...
              c'est un vagabond de l 'amour. Il n'est pas facile de vivre avec lui , mais lui, est il facile de vivre avec lui ? 
              En résilience forcenée ,égocentrique, il s'intéresse à lui de façon débordante et par conséquence peu aux autres. 
              Un peu agressif, un peu misogyne, transgressif, bien peu philanthrope, il peut être généreux et empathique..
              Atypique ,attachant , une personnalité extrême !!!</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body pt-5 pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={Dd2} className='dd2'/>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <p className='p-text text-white italic citation'>“Je suis invincible, c'est simple, je suis un winner.”</p>
            </div>
          </div>
        </div>
      </div>
      <div className='galerie-body pb-5'>
        <div className='container mt-5 pt-5'>
          <div className='row'>
            <div className='col-8'>
              <h3>Son histoire. Une révélation, prochainement disponible :</h3>
              <p className='p-text'>Une œuvre édifiante relatant un sort à la Edmond Dantès ou Jean Valjean !..
              C'est le récit d'une vie atypique et d'un destin chaotique d'un adolescent,venu du monde forain qui sera spécialement malmené.
              Pourtant le héros assurera sa vie avec brio. Il nous montre comment transcender ses blessures morales pour maîtriser sa vie et repousser l'adversité pour finalement trouver le chemin de la liberté intérieure.
              Lui sait ce que liberté veut dire!..Le récit captivant nous emmène dans un monde où nul autre n'ira.
              C'est une histoire sidérante ou l'insolite et l'émotion sont au rendez-vous à travers le livre profond qui nous interroge !..
              Découvrez son livre, la révélation, l'Histoire fascinante d'un homme extraordinaire, Daniel Deschamps :</p>
            </div>
            <div className='col-4'>
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
            <div className='col-6'>
              <img src={Dd3} className='dd2'/>
            </div>
            <div className='col-6 d-flex align-items-center'>
              <p className='p-text text-white italic citation'>“Toujours être le précurseur.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};