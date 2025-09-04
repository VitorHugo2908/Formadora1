import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import React from "react";

const Sobre: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Sobre o aluno</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color={"secondary"} className="ion-padding">
        <IonCard>
          <IonCardContent>
            Me chamo Vitor Hugo Viana Izidoro de Oliveira, nasci no dia
            29/08/2003 me formei em 2021 e iniciei os meus estudos na Unisuam em
            2024 fazendo o curso de Análise e Desenvolvimento de Sistemas.{" "}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Sobre;
