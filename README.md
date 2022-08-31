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
- Trouver votre "DEVICE_KEY" : [ici](https://dev.facetec.com/account)  
- Trouver votre "SERVER_KEY" : [ici](https://dev.facetec.com/account#application1)  
config.yaml :  
```
deviceKeyIdentifier: [DEVICE_KEY]
serverKey: [SERVER_KEY]
productionKeyText: >
  appToken    = dwYslKI3fp1aw0wT2KWLCQHkq2ezcRL8
  expiryDate  = 2023-07-01
  key         = 003046022100b0bdfac58f66c770e4ed7b8a51ffeec1de77ee29074e1578938d74bd960224eb022100ad9f702366d71fe12b07d3bdec9a9ab8cb5e89dbc42ce77a171e105585e8f45a
faceMapEncryptionKey: "-----BEGIN PRIVATE KEY-----MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDk/FncMuP7M/pPocWDPOQzvst3M/d+iMGgtqzDsR/O8syck1SXJFvmbx7lDLInEj7BGOwAse8WAvMbDEzx6HMOqoFl535/jDfcaBBcVk5LgA6/I9sAuAJigt6GKAsBtsI1OR5jlENyaZIj+xun6zqYCIAoq8J0ip7XtuW1n+t8SgveA8oR8td43nj0tOPdcGnSG8biWhDp4LUTW1HNKR8YkPgYhW9H6PXaBcBp+2PdqF9jGKgEfsXsdDHOZaTAPKfdupTnh5qIHt/R+2w+lYxx5RqqQvYNlS+A3R58QmOdbLnLX8aSrkYZYJE4j1cb9LBcnfQFtVR6FNtVwPvT5kXxAgMBAAECggEAH4lpztvrbjNwa/s5uqNuQnoqh5ZOpcyr7jh6ftEsMlJaP85CvjYxugDf3mfrOVpX7jxCdK4M4ZkyZi1Bg6eiAQkWnTROxb5IC0EBz9XLHrbaURTdGrI9Edg4UX2+VlQXV0EwoEJRL7a+e9ofqvbIsRuqmu9c7rQQwGDeLi+CPTGqvGkm4+WX3WDPpVXNjAtfFgYGHNlPS8kycrtMppJ3j/qv5184A3FZXCHaTkwP3/PSFksfQwaGCQDWq7q915R/RnT6Y6oMd5lb5U9B7COnzpEI8JxcgsC46SrPBQzKCIiI8tj46quQzlLVnZypyI3RqWqlKgjpjOtaSSfM/+toAQKBgQD/HQ8yD5hS40GMofn/jxRP4vV6LDInvrJ8qkBiTEoW8lWJ49KmzkNiJJZF293+yzal9siy0oPWOAwUhyiu6NGD1lH7afg1aZ5VgfYbNOWDl1aqt6wP/062CUJlzcMjwiyT17NYLSVRKO/7ALh7QXIPNpBJpmbMH/UnUNwO8sOWMQKBgQDlyAybuSojYw1EL6IFcBXJdWLgy7pQYIt4Om187CnKpZKewsNAM/Mnb3WJL5m7LiJ6dIDPhpA03a1/kQ3Vf8TMeaVFdmZ+FpDHKNkJPbdpDZXE0Xta7zY0NYcW2WL4O2IkJ3c61/4NVYiyV1BS/5AfuU2Fe1OmTsDTJZC9sTD7wQKBgQDmbB7ffop8w1rfZSXjGB6mkT5bnTOoBmw8gaIppvJ8i2GLbEVF+KOQL6+zZYW7r1yqxp48Njxx7qmqmPG8GfmzdI8T4IEZ7U3fucTKihqLotPa2o8E2/sCHJbmUNVipO2Sk48fo5dDGRC4y8vVOCWHbCci/rN2x56sZjJ9JfRW4QKBgQCVCeiDqNpYEYstSugANu8quGTmAb5bHAPae6tAd72znyk2qIUUQ53XWkgWLzW7XvUmECLseA9Y+t/p+h/K9xCiv9Qe9ekMp35Ib4o2oD0yeolGG8my9a1mt8FjZKT49St239JJ7IbwByae5ltHOlQ0/2/0wEVFfZc8XQVAxIlNAQKBgQD7rTkLmsiIpsxjam39p5QOLxjHuH/8CLZsVlfvl8+NPWC8CmYy1ABaEG3r/nxzjCSAKmOj95TtlnvUAab0oM29YAGsVJoElg9ksgTpUsBUwQw1ZAtsZ0rk5VSennbVuPThSgKfl2a89KmVu5Q+nGIVPCeibLgt/TnKxpirbal0rw==-----END PRIVATE KEY-----"
database: mongodb
mongodb:
  uri: INSERT YOUR MONGO URL HERE
  databaseName: db
serverBaseURL: /
serverPort: 8080
enableSearch: false
search3D3DDatabaseRootDirectory: /home/ubuntu/MyTestFaceTec3DDB
search3D2DFacePortraitDatabaseRootDirectory: /home/ubuntu/MyTestFaceTec3D2DFacePortraitDB
search3D2DKioskPOSDatabaseRootDirectory: /home/ubuntu/MyTestFaceTec3D2DKioskPOSDB
faceMapExportPublicKeyForReEncryption: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5PxZ3DLj+zP6T6HFgzzk\nM77LdzP3fojBoLasw7EfzvLMnJNUlyRb5m8e5QyyJxI+wRjsALHvFgLzGwxM8ehz\nDqqBZed+f4w33GgQXFZOS4AOvyPbALgCYoLehigLAbbCNTkeY5RDcmmSI/sbp+s6\nmAiAKKvCdIqe17bltZ/rfEoL3gPKEfLXeN549LTj3XBp0hvG4loQ6eC1E1tRzSkf\nGJD4GIVvR+j12gXAaftj3ahfYxioBH7F7HQxzmWkwDyn3bqU54eaiB7f0ftsPpWM\nceUaqkL2DZUvgN0efEJjnWy5y1/Gkq5GGWCROI9XG/SwXJ30BbVUehTbVcD70+ZF\n8QIDAQAB\n-----END PUBLIC KEY-----"
enableDebugLogging: true
usageLogServerUri: http://localhost:3000
ocrTemplatesRootDirectory: /home/OCRTemplates
initializeForPostmanTestSuiteWithServer: false
...
```

### Création de la base de données ###
Concernant la création de la base de données, nous avons essayé quatre options:

- Utiliser les services cloud de MongoDB Cloud Atlas (*non recommandé*)
- Utilisation du service AWS DocumentDB
- Création d'une nouvelle VM qui va s'occuper d'accueillir la base de données
- Création de la base de données directement sur la VM du serveur SDK par Docker

Dans 2 des 4 cas, nous avons eu de la difficulté à configurer la base de données, puisque nous avons manqué de temps. De ce fait, nous recommandons d'utiliser soit DocumentDB ou MongoDB directement sur votre VM. Une configuration minime est nécessaire, et le lien entre DocumentDB et EC2 est beaucoup plus simple puisque celui-ci est fait à l'intérieur des services AWS à notre disposition. Cependant, il faut s'assurer d'avoir un environnement AWS Cloud9 de configuré, puisque certains services DocumentDB sont fournis dans ce type de console.  Pour MongoDB sur la VM directement, vous devez tout d'abord installer Docker voici un lien expliquant comment faire que nous avons suivi : [Installation Docker](https://docs.docker.com/engine/install/ubuntu/)  

### Guide Docker : ###

- Pour partir le service Docker : `sudo systemctl start docker`
- Pour lancer le conteneur (l'id que nous avons utilisé est "bd") : `docker start **CONTAINER ID**`
- Pour entrer en ligne de commande du container : `docker exec -it <CONTAINER_ID> bash`

### Guide MongoDB : ###
Note : La liste de commandes n'est que basique. Référez-vous à la documentation officielle pour plus de commandes : [Documentation](https://www.mongodb.com/docs/manual/reference/mongo-shell/)
- Entrez dans l'interpréteur de commande de MongoDB : `mongo` ou `mongosh`
- Pour montrer les bases de données disponible : `show dbs`
- Pour sélectionner une base de données (nécessaire avant toute autre action) : `use "DB_NAME"`
- Pour montrer les collections : `show collections`
- Pour montrer les données enregistrées : `db.collection.find()`

### Guide Connexion SSH au serveur : ###

### Procédure de lancement pour le Serveur Standard : ###
Note : Le serveur, à moins qu'il y est eu modification, va être lancé sur: http://localhost:8080
- Commande pour construire le Serveur : `docker-compose build`
- Commande pour mettre en marche le Serveur : `docker-compose up`

### Procédure de lancement pour le Serveur Modifié : ###
Note : Le serveur, à moins qu'il y est eu modification, va être lancé sur: http://localhost:8080
- Commande pour construire le Serveur : `./build.sh` ou `sh build.sh`
- Commande pour mettre en marche le Serveur : `./run.sh` ou `sh run.sh`

# Installation du côté Client

### Ajout du SDK dans l'application : ###
  
Selon nos expérimentations, il serait plus difficile de partir de zéro l'application puis par la suite intégrer le SDK, que de partir du SDK et monter l'application désiré autour du code fourni. En revanche, il semble possible de créer l'application sans intégrer le SDK de l'application (ce que nous avons tenté à la fin).  
  
Le SDK de Facetec possède de nombreux composants additionnels et utilise un webpack. C'est donc en grande partie pour cela que l'on recommanderait de partir du sdk. (afin d'avoir tout le nécessaire) De plus, il n'y a pas de documentation ni de service à jour qui aide à monter l'application. (exemple pour REACT-Native : facetec-module-bridge. ([voir la documentation du module](https://www.npmjs.com/package/react-native-facetec)))  
  
Si le projet est très grand, doit possèder beaucoup de fonctionnalités, ou se distribue à grande échelle, nous recommandons fortement de monter votre propre application et créer vos propres requêtes afin de les adapter plus facilement à vos besoins. ([voir exemple requêtes](/screens/Components/API/api.tsx))  

### Test de l'api de l'application mobile ###

Pour tester le serveur de FaceTec, plusieurs applications démonstratives sont fournies en téléchargement sur leur site. Celle que nous avons utilisé est la suivante:
[FaceTec-Browser-SDK-React-Typescript-9.2.0.zip](https://github.com/ZackaryGTremblay/app-mcn/files/9377668/FaceTec-Browser-SDK-React-Typescript-9.2.0.zip)

Pour que l'application fonctione, une X-Device-Key devra être ajoutée dans le fichier Config.js. Cette clé est située dans la page du compte développeur de FaceTec (https://dev.facetec.com/account)
