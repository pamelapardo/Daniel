import React, { useState } from "react";
import PopupModal from '../components/popupModal'

export default function Popup(props) {
  let [showModal, setShowModal] = useState(true);

  return (
    <div>
      <PopupModal
        image={props.image}
        imageTitle="Exposition "
        showModal={showModal}
        handleClose={() => { setShowModal(false) }} />
    </div>
  )
}
