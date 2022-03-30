import { IonContent, IonHeader, IonItem, IonPage, IonPopover, IonTitle, IonToolbar } from "@ionic/react"
import { Link } from "react-router-dom";
import "./SecondPage.css"
import hamburger from "../icons/hamburger.svg";

const SecondPage : React.FC = () => {
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="toolbar">
                    <IonTitle>Second Page</IonTitle>
                    <button className="hamburger-container"
                    slot="end" id="pop">
                        <img className="hamburger"
                        src={hamburger} alt=""/>
                    </button>
                    <IonPopover isOpen={true}
                    side="top" alignment="end"
                    trigger="pop">
                        <IonContent>
                            <IonItem>Item1</IonItem>
                            <IonItem>Item2</IonItem>
                            <IonItem>Item3</IonItem>
                        </IonContent>
                    </IonPopover>
                </IonToolbar>
                <Link to="/home" className="router-link">Go to homepage</Link>
            </IonHeader>
        </IonPage>
    )
}
export default SecondPage;