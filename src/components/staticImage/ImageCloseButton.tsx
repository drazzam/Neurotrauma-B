import React from "react";
import SquareButton from "../SquareButton";
import close from "../../Icons/close.svg";

import "./ImageCloseButton.css";

type ImageCloseButtonProps = {
    setImageFile: (image: File | null) => void;
};

// Component for clearing the static image and going back to the webcam view
function ImageCloseButton({setImageFile}: ImageCloseButtonProps) {
    
    const onClick = () => {
        window.location.reload();
    };

    return (
        <div id="image-close-button">
            <SquareButton onClick={onClick}>
                <img id="close-icon" src={close} alt={"Close"} />
            </SquareButton>
        </div>
    )
}

export default ImageCloseButton;
