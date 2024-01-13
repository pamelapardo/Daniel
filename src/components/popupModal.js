import Modal from 'react-bootstrap/Modal';


const PopupModal = (props) => {
  return (
    <Modal className='modal-1' show={props.showModal} onHide={props.handleClose}>
        <div className='modal-content-container_expo'>
          <Modal.Header className='modal-header' closeButton>
            <div  className='modal-title align-items-center'>
              <Modal.Title>{props.imageTitle}</Modal.Title>
            </div>
            </Modal.Header>
          <Modal.Body className='popup-modal'>Daniel vous parle un peu de son histoire au festival de L'Aigle de Nice.<br/><br/>
          <iframe width="516" height="355" title='Fast Interview de Daniel Deschamps'
            src="https://www.youtube.com/embed/BE1CdEzJd0o">
          </iframe>
        </Modal.Body>
        </div>
    </Modal>
  );
}

export default PopupModal;