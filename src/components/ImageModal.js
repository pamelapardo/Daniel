import Modal from 'react-bootstrap/Modal';

const ImageModal = (props) => {
  return (
    <Modal className='modal-1' show={props.showModal} onHide={props.handleClose}>
      <div className='d-flex justify-content-between'>
        <div>
          <img className='img-modal' src={props.image} alt='painting'/>
        </div>
        <div>
          <Modal.Header closeButton><Modal.Title>{props.imageTitle}</Modal.Title></Modal.Header>
          <Modal.Body>{props.imageText}</Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;