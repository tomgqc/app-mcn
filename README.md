# App-MCN-Facetec

Ceci est le document de référence au stage de l'été 2022 de Tomy Chouinard et Zackary G Tremblay. Nous n'avons malheureusement pas eu le temps de finaliser tous les points concernant FaceTec et ses intégrations de comparaison faciale par manque de temps et par le côté vague de certaines informations données par FaceTec concernant son produit.

# Prérequis
[SDK - Facetec](https://dev.facetec.com/downloads)  +  [aws - instance EC2](https://aws.amazon.com/fr/ec2/)  
  
Base de données : Facetec recommande fortement d'utiliser MongoDB, mais une utilisation d'un autre moteur de gestion de BD est possible (recommendation format JSON)
  
# Installation côté serveur :
Au niveau de l'installation du serveur FaceTec, plusieurs options vont s'offrir à vous. Cependant, dans tous les cas, une machine EC2 d'AWS est nécessaire. Les spécifications vont vraiment dépendre de votre environnement de test, mais en point de référence, voici les spécifications de la machine que nous avons utilisé:

### Création de la machine virtuelle ###

- Type d'instance: t2.2xlarge
- Stockage: trois disques de 25GB (peut être seulement un disque avec un espace équivalent)
- OS: Ubuntu (Linux/UNIX) 22.04.1 LTS

Dans la machine, il sera nécessaire d'installer [Node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-fr) et MongoDB pour que le serveur fonctionne correctement.

### Configuration du Server SDK ###

Après avoir créé votre VM, il sera nécessaire de configurer le SDK serveur. Cela est fait en ajoutant une string de connection (MongoDB URI) dans le serveur. Il sera aussi nécessaire de configurer le fichier config.yaml pour déployer votre serveur avec Docker, ou tout autre service de déploiement. Il est par la suite nécessaire de transférer votre SDK dans la machine virtuelle EC2.

### Création de la base de données ###
Concernant la création de la base de données, nous avons essayé quatre options:

- Utiliser les services cloud de MongoDB Cloud Atlas (*non recommandé*)
- Utilisation du service AWS DocumentDB
- Création d'une nouvelle VM qui va s'occuper d'accueillir la base de données
- Création de la base de données directement sur la VM du serveur SDK par Docker

Dans 2 des 4 cas, nous avons eu de la difficulté à configurer la base de données, puisque nous avons manqué de temps. De ce fait, nous recommandons d'utiliser soit DocumentDB ou MongoDB directement sur votre VM. Une configuration minime est nécessaire, et le lien entre DocumentDB et EC2 est beaucoup plus simple puisque celui-ci est fait à l'intérieur des services AWS à notre disposition. Cependant, il faut s'assurer d'avoir un environnement AWS Cloud9 de configuré, puisque certains services DocumentDB sont fournis dans ce type de console.  Pour MongoDB sur la VM directement, vous devez tout d'abord installer Docker voici un lien expliquant comment faire que nous avons suivi : [Installation Docker](https://docs.docker.com/engine/install/ubuntu/)  

# Guide Docker : 

- Pour partir le service Docker : `sudo systemctl start docker`
- Pour lancer le conteneur (l'id que nous avons utilisé est "bd") : `docker start **CONTAINER ID**`
- Pour entrer en ligne de commande du container : `docker exec -it <CONTAINER_ID> bash`

# Guide MongoDB : 
Note : La liste de commandes n'est que basique. Référez-vous à la documentation officielle pour plus de commandes : [Documentation](https://www.mongodb.com/docs/manual/reference/mongo-shell/)
- Entrez dans l'interpréteur de commande de MongoDB : `mongo` ou `mongosh`
- Pour montrer les bases de données disponible : `show dbs`
- Pour sélectionner une base de données (nécessaire avant toute autre action) : `use "DB_NAME"`
- Pour montrer les collections : `show collections`
- Pour montrer les données enregistrées : `db.collection.find()`

# Guide Connexion SSH au serveur : 

# Procédure de lancement pour le Serveur Standard : 
Note : Le serveur, à moins qu'il y est eu modification, va être lancé sur: http://localhost:8080
- Commande pour construire le Serveur : `docker-compose build`
- Commande pour mettre en marche le Serveur : `docker-compose up`

# Procédure de lancement pour le Serveur Modifié : 
Note : Le serveur, à moins qu'il y est eu modification, va être lancé sur: http://localhost:8080
- Commande pour construire le Serveur : `./build.sh` ou `sh build.sh`
- Commande pour mettre en marche le Serveur : `./run.sh` ou `sh run.sh`

# Ajout du SDK dans l'application : 
  
Selon nos expérimentations, il serait plus difficile de partir de zéro l'application puis par la suite intégrer le SDK, que de partir du SDK et monter l'application désiré autour du code fourni. En revanche, il semble possible de créer l'application sans intégrer le SDK de l'application (ce que nous avons tenté à la fin).  
  
Le SDK de Facetec possède de nombreux composants additionnels et utilise un webpack. C'est donc en grande partie pour cela que l'on recommanderait de partir du sdk. (afin d'avoir tout le nécessaire) De plus, il n'y a pas de documentation ni de service à jour qui aide à monter l'application. (exemple pour REACT-Native : facetec-module-bridge. ([voir la documentation du module](https://www.npmjs.com/package/react-native-facetec)))  
  
Si le projet est très grand, doit possèder beaucoup de fonctionnalités, ou se distribue à grande échelle, nous recommandons fortement de monter votre propre application et créer vos propres requêtes afin de les adapter plus facilement à vos besoins. ([voir exemple requêtes](/screens/Components/API/api.tsx))  

# Test de l'api de l'application mobile

Pour tester le serveur de FaceTec, plusieurs applications démonstratives sont fournies en téléchargement sur leur site. Celle que nous avons utilisé est la suivante:
[FaceTec-Browser-SDK-React-Typescript-9.2.0.zip](https://github.com/ZackaryGTremblay/app-mcn/files/9377668/FaceTec-Browser-SDK-React-Typescript-9.2.0.zip)

Pour que l'application fonctione, une X-Device-Key devra être ajoutée dans le fichier Config.js. Cette clé est située dans la page du compte développeur de FaceTec (https://dev.facetec.com/account)
