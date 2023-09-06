FROM node:18-alpine as dev
USER node
WORKDIR /develop
EXPOSE 5000

FROM node:18-alpine as prod
USER node
WORKDIR /develop
COPY . .
EXPOSE 5000