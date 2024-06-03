### README frontend

# chat-poc - Frontend

Ce projet frontend utilise Angular pour fournir une interface utilisateur pour le chat en temps réel.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js et npm : [Télécharger Node.js](https://nodejs.org/)

## Installation

1. Clonez le repository :
```
    git clone https://github.com/votre-utilisateur/your-car-your-way.git
    cd your-car-your-way/frontend
```
2. Installez les dépendances :
```
    npm install
```
## Lancement de l'application

1. Démarrez l'application Angular :
```
    ng serve
```
2. Ouvrez votre navigateur et allez à http://localhost:4200.

##  Structure du projet
chat.component.ts : Composant principal gérant l'interface de chat.
web-socket.service.ts : Service gérant les communications WebSocket avec le serveur backend.

##  Fonctionnalités
Envoi et réception de messages en temps réel.
Interface utilisateur simple pour envoyer des messages et voir les messages reçus.