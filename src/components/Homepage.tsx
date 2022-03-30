import { IonItem, IonList } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"
//components
import ImageController from "./ImageController";

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