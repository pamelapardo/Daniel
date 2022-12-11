import Modal from 'react-bootstrap/Modal';

const ImageModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.imageTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.imageText}</Modal.Body>
    </Modal>
  );
}

export default ImageModal;