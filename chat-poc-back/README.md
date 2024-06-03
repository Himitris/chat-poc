### README backend

```markdown
# Chat - Backend

Ce projet backend utilise Spring Boot pour fournir une API de chat en temps réel via WebSocket.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Java 11 ou supérieur : [Télécharger Java](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- Maven : [Télécharger Maven](https://maven.apache.org/download.cgi)

## Installation

1. Clonez le repository :
   ```sh
   git clone https://github.com/votre-utilisateur/your-car-your-way.git
   cd chat-poc/chat-poc-back

2. Installez les dépendances :

mvn install
Lancement du serveur

3. Démarrez le serveur Spring Boot :

mvn spring-boot:run
Le serveur sera disponible sur http://localhost:8084.

## Structure du projet

ChatController.java : Contrôleur principal gérant les messages de chat.
WebSocketConfig.java : Configuration du WebSocket pour permettre les communications en temps réel.

## API
Le serveur expose les points de terminaison suivants pour WebSocket :

/chat-websocket : Point de terminaison pour établir la connexion WebSocket.
/app/sendMessage : Point de terminaison pour envoyer des messages.
/topic/messages : Canal pour recevoir des messages en temps réel.

