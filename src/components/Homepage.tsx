import { IonItem, IonList } from "@ionic/react";
import { Link } from "react-router-dom";
import "./Homepage.css"
//components
import ImageController from "./ImageController";


/* I used the custom component ImageController here. This component is created
to overcome some layout issues I was having with the default homepage in Home.tsx */

/* The image controller, the link to go to the next page and the list views are
rendered in this component*/
export default function Homepage(){
    return(
        <div className="homepage-container">
            <ImageController />
                <Link className="router-link"
                to="/second">
                Go to next page
                </Link>
            <IonList>
                <IonItem>Item 1</IonItem>
                <IonItem>Item 2</IonItem>
                <IonItem>Item 3</IonItem>
                <IonItem>Item 4</IonItem>
            </IonList>
        </div>
    )
}