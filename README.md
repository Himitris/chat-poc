# Your Car Your Way - Application de Chat

Cette application de chat en temps réel est construite en utilisant Angular pour le frontend et Spring Boot pour le backend. Elle permet aux utilisateurs de communiquer via une interface de chat en temps réel.

## Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Lancement de l'application](#lancement-de-lapplication)
- [Technologies utilisées](#technologies-utilisées)

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js et npm : [Télécharger Node.js](https://nodejs.org/)
- Java 11 ou supérieur : [Télécharger Java](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- Maven : [Télécharger Maven](https://maven.apache.org/download.cgi)

## Installation

1. Clonez le repository :
   git clone https://github.com/votre-utilisateur/chat-poc.git
   cd chat-poc

2. Installez les dépendances du backend :

cd chat-poc-back
mvn clean install
cd ..

3. Installez les dépendances du frontend :

cd chat-poc-front
npm install
cd ..

## Lancement de l'application

Lancement du backend

1. Naviguez dans le répertoire backend :

cd chat-poc-back

2. Démarrez le serveur Spring Boot :

mvn spring-boot:run

Lancement du frontend

1. Naviguez dans le répertoire frontend :
cd chat-poc-front

2. Démarrez l'application Angular :
ng serve

3. Ouvrez votre navigateur et allez à http://localhost:4200.

## Technologies utilisées

Frontend : Angular, TypeScript, HTML, CSS
Backend : Spring Boot, Java
WebSocket : SockJS, STOMP
