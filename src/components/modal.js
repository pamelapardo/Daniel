import React from "react";
import '../styles/modal.scss';

const Modal = props => {
  return (
    <div className={`modal-1 ${props.show ? 'show' : ''}`}>
      <div className="modal-contenu">
        <div className="modal-header">
          <button onClick={props.onClose}>
            <div class="close-container">
              <div class="leftright"></div>
              <div class="rightleft"></div>
              <label class="label-modal close">fermer</label>
            </div>
          </button>
        </div>

        <div className="modal-body">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-6 h-100">
                <img className="peinture-modal" src={props.peinture} alt="peinture"/>
              </div>
              <div className="col-6 h-100">
                <div className="h-100 ms-5 d-flex align-items-center justify-content-start">
                  <p className="modal-text">Text LOREM IPSUM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal