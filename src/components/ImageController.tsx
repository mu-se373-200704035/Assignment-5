import React from "react";
import "./ImageController.css"
import image from "../images/restaurant.png"
export default function ImageController(){
    /* In this functional component, as the name suggests we determine
    if the image is going to be displayed or not. we use the state imageShown
    for this purpose. Then we conditionally render the image. */ 
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