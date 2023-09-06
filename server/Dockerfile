FROM node:18-alpine as dev
# Stage de dev avec une image alpine 18 car l'image est légère et rapide
USER node
#Utilisateur permettant d'accorder les droits de modifications au conteneur
WORKDIR /develop
#Création du dossier de répertoire qui sera utilisé par le conteneur pour les différentes commandes
EXPOSE 5000
#Spécification de l'utilisation du port 5000 pour le conteneur

FROM node:18-alpine as prod
USER node
WORKDIR /app
COPY . .
#Copie du dossier spécifié dans "WORKDIR"
RUN npm ci
#Execute la commande pour installer les dépendances
EXPOSE 5000
CMD ["node","index"]
#Execute la commande pour lancer le back