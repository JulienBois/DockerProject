# DockerProject

Ce projet est une application web composée d'un frontend React et d'un backend Express. Il est conçu pour être déployé en utilisant Docker Compose, avec des fichiers de configuration distincts pour les environnements de développement et de production.

## Prérequis

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Structure du Projet

- `/client`: Le code source du frontend React.
- `/server`: Le code source du backend Express.
- `/server/index.js`: Le fichier principal du backend.
- `docker-compose.yml`: Configuration Docker Compose pour l'environnement de développement.
- `docker-compose-prod.yml`: Configuration Docker Compose pour l'environnement de production.

## Utilisation

### Développement

1. Vérifier si docker est installé et ouvert.

2. Dans le répertoire racine du projet, exécutez la commande suivante pour démarrer les conteneurs de développement :

   ```bash
   docker-compose up --build --detach
   ```
3. Ouvrez votre navigateur et accédez à http://localhost:3000 pour voir l'application frontend en développement.

4. Le back est disponible sur l'adresse http://localhost:5000.

5. Accéder aux conteneur docker exécutez:

   ```bash
   docker exec -it nom_du_conteneur sh
   ```

6. Installer les dépendances: 

   ```bash
   npm install
   ```

7. Lancer le back depuis le conteneur: 

   ```bash
   node index.js
   ```

   Lancer le front depuis le conteneur:

    ```bash
    npm start
    ```

8. Pour sortir du conteneur : 
  
   ```bash
   exit
   ```
9. Pour arrêter les conteneurs, exécutez :
  
   ```bash
   docker-compose down
   ```

### Production

1. Vérifier si docker est installé et ouvert.

2. Dans le répertoire racine du projet, exécutez la commande suivante pour démarrer les conteneurs de développement :

   ```bash
   docker-compose -f docker-compose-prod.yml up --build --detach
   ```
3. Ouvrez votre navigateur et accédez à http://localhost:8080 pour voir l'application frontend en développement.

4. Le back est disponible sur l'adresse http://localhost:5000.

5. Accéder aux conteneur docker exécutez:

   ```bash
   docker exec -it nom_du_conteneur sh
   ```

6. Lancer le back depuis le conteneur: 
   ```bash
   node index.js
   ```

7. Pour sortir du conteneur : 
  
   ```bash
   exit
   ```
8. Pour arrêter les conteneurs, exécutez :
  
   ```bash
   docker-compose down
   ```