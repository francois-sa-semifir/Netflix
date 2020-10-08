#!/usr/bin/env bash

clear
echo $'\nInstallation du projet'

# Mise à jour de npm
npm i -g npm


# installation des dépendances
npm i 

# build du projet
npm run build

node server.js