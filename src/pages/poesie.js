import React from 'react';
import Header from '../components/header';
import BrushPoesie from '../images/brush-poesie.png';
import Brush4 from '../images/brush4.png';
import BrushWhite from '../images/brush-white.png'
import Dd2 from '../images/dd2.png';
import Dd3 from '../images/dd3.png';
import Dd5 from '../images/daniel5.png'

export default function Galerie (props) {
  return (
    <div className=' scroll'>
      <Header/>
      <div className='galerie-body'>
        <h1>Poesie</h1>
        <div>
          <img className='brush2 mb-3' src={BrushPoesie} alt='brush'/>
        </div>
        <div className='container mt-4 pb-5'>
          <div className='row'>
            <div className='col-8'>
              <h3>Hantise</h3>
              <p className='p-text'> Tout au fond de ma tête : une grande toile <br/>
              d'araignée est ancrée au plafond de mon désespoir.<br/>
              Toile à laquelle s'accroche ravageuse et démoniaque<br/>
              une tarentule blanche, sur son dos est écrit le mot<br/> 
              “Légèreté…” on doit le traduire inconséquence<br/>
              Elle se balance passant du froid raisonnement intellectuel<br/>
              à l'imaginaire irréel et inconcrétisable,<br/>
              elle fait du vent, du vent en se balançant,<br/>
              oscillant entre l'engagement pour l'apparence et<br/>
              la renonciation pour l'expression (désir-rejet !…)<br/>
              <br/>
              Une feuille de rameau d'olivier flotte sur le lac<br/>
              de mes pensées obsédantes, un petit ange blond est<br/> 
              couché dessus. Il passe, méprisant les cris de mon<br/>
              amour, il passe sans rien entendre, sans me voir.<br/>
              Il va au pays des enfants, au pays des méchants, se<br/>
              laissant porter par le courant maternel qui le mène.<br/>
              <br/>
              L'ange l'araignée se sont casés au plus profond<br/>
              de mon être, leur existence me hante, ils dévorent<br/>
              avant que ne naisse tout futur qui voudrait me<br/>
              soulager ; le passé est avec eux, rigolard, provo-<br/>
              cateur.<br/>
              </p>
              <div className='d-flex position-relative'>
                <img className='brush' src={Brush4} alt='brush'/>
                <div className='date-container'>
                  <p className='date'>Alençon - 29/09/1986</p>
                </div>
              </div>
            </div>
            <div className='col-4 overflow-visible'>
              <img className='dd5' src={Dd5} alt='daniel'/>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body pb-5'>
        <div className='container mt-5 pt-5'>
          <div className='pt-5 pb-5'>
            <div className='text-align-end'>
              <h3 className='text-white'>Poésie libre III</h3>
              <p className='p-text text-white'>Si quelquefois de tes mains frêles et douces tu<br/>
            t'aventurais à caresser tendrement ma peau en<br/>
            manque du frôlement de tes longs doigts fins,<br/>
            guérisseurs…<br/>
            <br/>
            Si quelquefois ta bouche pulpeuse, au dessin de<br/>
            rêve, venait effleurer affectueusement la joue<br/>
            d'un mâle qui t'admire…<br/>
            <br/>
            Si, en plus, oh merveille ! , tes bras venaient<br/>
            s'ajouter en m'encerclant à ce flot de dons suaves<br/>
            et sécurisants.<br/>
            <br/>
            Si à tout ce lot d'offrandes tes yeux noirs,<br/>
            en amandes et fascinants,  jouaient les falots de<br/>
            l'amour : Je me sentirai humain car tu serais <br/>
            humaine rien qu'en te voulant mienne.<br/>
            <br/>
            Moi, depuis la nuit des temps je suis tien ! … <br/>
            Si quelquefois je pouvais soulever tes longs<br/>
            cheveux soyeux pour ceindre ton cou de cygne paci-<br/>
            fique et sentir la douceur de ta peau qui m'enivre<br/>
            Si quelquefois tu voulais entendre de ma bouche,<br/>
            que d'autres disent sensuelle, des mots qui n'en<br/>
            sont jamais sortis je me sentirai plus que tien :<br/>
            je me sentirai humain.<br/>
            <br/>
            si de toutes les larmes qui coulèrent du bleu<br/>
            de mes yeux, tu voulais faire un océan d'espoir.<br/>
            Si, de toute ton âme, tu voulais par amour faire<br/>
            de notre union une baguette magique tu ferais de<br/>
            nous, plus qu'un couple, tu créerais une entité<br/>
            amoureuse.<br/>
            <br/>
            Tu te réaliserais enfin, sans autre concours que<br/>
            toi, tu te révèlerais à toi, à moi, à la vie ! …<br/></p>
            </div>
            <div className='d-flex position-relative justify-content-end'>
              <img className='brush' src={BrushWhite} alt='brush'/>
              <div className='date-container me-5'>
                <p className='date-bleu'>1986</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='galerie-body pb-5'>
        <div className='container mt-5 pt-5'>
          <div className=''>
            <div className='col-4'></div>
            <div className='col-8'>
              <h3>Papa</h3>
              <p className='p-text'>P comme pauvre<br/>
              A comme âne<br/>
              P comme paradis<br/>
              A comme amour<br/>
              Papa, mon petit ange,est un pauvre âne<br/>
              Au paradis de l'amour.<br/>
              Mais tu sais, mon petit chou,<br/>
              S'il est toujours aux quatre coins de la France,<br/>
              Aujourd'hui, c'est parce qu'il cherche encore<br/>
              Les étoiles dans le sable.<br/>
              Et puis avec ses grandes oreilles<br/>
              Il pourra t'entendre le jour où<br/>
              Tu l'appelleras et que tu lui demanderas<br/>
              de peindre un soleil avec sa queue.<br/>
              <br/>
              Ton papa est un âne artiste.<br/>
              <br/>
              Ma petite Ophélie, papa a toujours aimé<br/>
              raconter des histoires aux enfants, celles<br/>
              qu'il adore,ce sont les histoires auxquelles<br/>
              tu crois : celles qui t'agrandissent les yeux<br/>
              et l'imagination !<br/></p>
            </div>
            <div className='d-flex position-relative'>
              <img className='brush' src={Brush4} alt='brush'/>
              <div className='date-container'>
                <p className='date'>Paris - 10/04/1987</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bleu-body pb-5'>
        <div className='container mt-5 pt-5'>
          <div className='pt-5 pb-5'>
            <div className='text-align-end'>
              <h3 className='text-white'>Celle qui passait</h3>
              <p className='p-text text-white'>Les cloches sonnaient huit heures, je marchais<br/>
              dans les rues, je marchais dans ma tête, une<br/>
              fille brune aux cheveux de rêve (ceux qui me <br/>
              font vibrer très fort : tignasse de mouton) est<br/>
              passée devant moi sans me voir, happée par sa vie.<br/>
              <br/>
              Moi, j'allais je nesais où (tiens moi !)<br/>
              Je déambulais, les pensées à des kilomètres de là.<br/>
              J'étais dans les Alpes et je pensais aux Pyrénées ;<br/>
              Je constatais que j’aimais à penser à quelqu'un,<br/>
              que j’appréciais de me projeter dans le futur , que <br/>
              que je ne dédaignais pas faire des projets.<br/>
              Penser à une création, à un engagement, à un chemi-<br/>
              nement des évènements : c'est étre créateur et<br/>
              passer à côté de la névrose.<br/>
              <br/>
              Je déambulais la paix dans la tête, la tête sous<br/>
              les étoiles d'automne (Peut-être un printemps de<br/>
              vie ! … )<br/></p>
            </div>
            <div className='d-flex position-relative justify-content-end'>
              <img className='brush' src={BrushWhite} alt='brush'/>
              <div className='date-container'>
                <p className='date-bleu'>Grenoble - 11/10/1988</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='galerie-body pb-5'>
        <div className='container mt-5 pt-5'>
          <div className=''>
            <div className='col-4'></div>
            <div className='col-8'>
              <h3>Grattage</h3>
              <p className='p-text'>    J'ai gratté dans mes cheveux et ce fut :<br/>
              L'éclat de la pellicule -acteur -<br/>
              J'ai gratté de la quitare et ce fut :<br/>
              La danse du bourdon - menteur - <br/>
              J'ai gratté dans l'eau et c'était rigolo-Cléo.<br/>
              J'ai gratté en haut et c'était très beau -étoiles -<br/>
              Mais où j'ai bien gratté c'est quand<br/>
              J'ai gratté l'écorce de mes yeux qui<br/>
              Ne voulaient pas voir la réalité -horreur-<br/>
              J'ai saigné très fort, mais ce n'est pas grave<br/>
              Car maintenant une fée me soigne assidument :<br/>
              L'Espérance !<br/></p>
            </div>
            <div className='d-flex position-relative'>
              <img className='brush' src={Brush4} alt='brush'/>
              <div className='date-container'>
                <p className='date'>Valréas - 26/12/1988</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};