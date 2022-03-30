import React from "react";
import "./ImageController.css"
import image from "../images/restaurant.png"
export default function ImageController(){
    
    const [imageShown, setImageShown] = React.useState(false)
    
    const toggleImage = () => {
        setImageShown(prevState => !prevState)
    }

    return(
        <div className="image-controller">
            <button onClick={ toggleImage } className="image-btn">
                Toggle image
            </button>
            <div className="image-container">
                { imageShown &&
                <img className="image" src={ image } alt=""/>}
            </div>
        </div>
    )
}