FROM node:18-alpine as dev # Création d'un stage pour dev
USER node # Utilisateur permettant d'accorder les droits de modifications au conteneur
WORKDIR /develop # Création du dossier de répertoire qui sera utilisé par le conteneur pour les différentes commandes
EXPOSE 5173 # Spécification de l'utilisation du port 5173 pour le conteneur

FROM node:18-alpine as build
WORKDIR /build
COPY . . # Copie du répertoire source dans le répertoire build
RUN npm ci # Execute la commande pour installer les dépendances
RUN npm run build # Execute la commande pour build l'application

FROM nginx:alpine3.18-slim as prod
COPY --from=build /build/build /usr/share/nginx/html # Copie le répertoire présent dans le build dans le fichier nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] # Démarre Nginx en mode démon lors du lancement du conteneur