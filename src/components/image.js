import React, { useState } from "react";
import ImageModal from "./ImageModal";

const ImageComponent = (props) => {
    let [showModal, setShowModal] = useState(false);

    return (
        <div>
            <img
                className='painting'
                src={props.image}
                alt='peinture'
                onClick={() => { setShowModal(!showModal) }}
            />
            <ImageModal
                image={props.image}
                imageTitle={props.imageTitle}
                imageText={props.imageText}
                showModal={showModal}
                handleClose={() => {setShowModal(false)}} />
        </div>
    )
}

export default ImageComponent