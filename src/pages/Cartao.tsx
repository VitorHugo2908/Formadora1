import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonImg,
  IonButton,
  IonLabel,
  IonAvatar,
} from "@ionic/react";
import React from "react";
import perfil from "./imgs/perfil.png";

const Cartao: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cartão de identificação do aluno</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color={"secondary"} className="ion-margin-top">
          <IonCardContent>
            <IonImg
              className="ion-margin-bottom"
              src={perfil}
              alt="foto de perfil"
              style={{ width: "50%" }}
            ></IonImg>
            <div>
              <h2>Nome: Vitor Hugo Viana Izidoro de Oliveira </h2> <br />
              <h2>Codigo de turma: ADS0301M</h2>
            </div>
          </IonCardContent>
          <IonItem color={"secondary"} button routerLink="/Sobre">
            <IonLabel>
              <IonButton color={"light"} expand="full" size="default">
                Saber mais{" "}
              </IonButton>
            </IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Cartao;
