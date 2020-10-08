#!/usr/bin/env bash

clear
echo "Mise à jour de npm"
# Mise à jour de npm
echo 
npm i -g npm

clear
echo $'\nInstallation des dépendances du projet'
# installation des dépendances
npm i -y

clear
echo "Construction du projet"
# build du projet
npm run build

clear
echo "Lancement du projet"
node server.js