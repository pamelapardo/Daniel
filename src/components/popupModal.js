import Modal from 'react-bootstrap/Modal';
import AigleDeNice from '../images/aigle-de-nice.png'


const PopupModal = (props) => {
  return (
    <Modal className='modal-1' show={props.showModal} onHide={props.handleClose}>
        <div className='modal-content-container_expo'>
          <Modal.Header className='modal-header' closeButton>
            <div  className='modal-title align-items-center'>
              <Modal.Title>{props.imageTitle}</Modal.Title>
            </div>
            </Modal.Header>
          <Modal.Body className='popup-modal'>Cet automne Daniel sera présenté comme peintre exposé au 35ème Grand Prix International d'intérêt d'arts plastiques de l'Aigle de Nice.<br/>
        Les œuvres seront exposées du 1er au 15 Novembre au Club-House de St Laurent du Var !<br/><br/>
        Vous pourrez le croiser à cette occasion et voir "La Fleur Fanée" et "Sabots de venus" ! <br/><br/>
        <strong>L'Aigle de Nice Festival :</strong> <a className='popup-link' href='https://www.youtube.com/watch?v=QcTCYjM2hMw' target="_blank" rel="noreferrer" >https://www.youtube.com/watch?v=QcTCYjM2hMw</a>
        </Modal.Body>
        </div>
        <div className='map-aile_container'>
          <img className='aigle-de-nice-img' src={AigleDeNice} alt='laigle-de-nice'/>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5227.108488514799!2d7.175269135585628!3d43.65752029617905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1691689438364!5m2!1sfr!2sfr" width="600px" height="450px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="google-maps"></iframe>
        </div>
    </Modal>
  );
}

export default PopupModal;