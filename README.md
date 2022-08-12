# app-mcn

# Happy Path

1.	L’usager soumet l’artéfact biométrique encrypté ainsi qu’un identifiant grâce à l’application citoyen.
2.	Le service de test de vivacité performe un test de vivacité qui est concluant.
3.	Le service de vivacité traite l’artéfact pour retirer les données ayant servies au test de vivacité.
4.	Le service de vivacité encrypte les données pour les expédier au service de comparaison faciale puis les supprimes après avoir envoyées ces mêmes données.
5.	Le service de comparaison faciale performe une comparaison faciale à partir d’une photo puisée dans la banque de l’état grâce à l’identifiant. La comparaison est concluante.
6.	Le service de comparaison retourne un statut de succès au service de test de vivacité.
7.	Le service de test de vivacité retourne en statut de succès à l’application citoyen.  


![happy-path-diagram](http://www.plantuml.com/plantuml/png/VP31IiOm383lVOgmao9zWI4o4GJ1s_2sI-Wo2BRfQ3B5jxTZJBlBVqkRxoiV7TIms9QYqq-M5Gicm62vZFOJ2V2RD2To_OTIwS7x9xXxvuM4LE-XX-TYl5H-aeT9tcQIUcGg9__e_PKVjn3gwBfz3xYkaGCQP-a05GxBTQS1HcfGxxuuq4uqZxd_ySXwoQdcisQv5TPODQwrBdcl61WZXB_jjQAnt40or__x1G00)

# Prérequis
[SDK - Facetec](https://dev.facetec.com/downloads)  +  [aws - instance EC2](https://aws.amazon.com/fr/ec2/)  
  
Base de données : Facetec recommande d'utiliser MongoDB, mais une utilisation d'un autre moteur de gestion de BD est possible (recommendation format JSON)
#  
  
# Installation côté serveur :
TODO

# Ajout du SDK dans l'application : 
  
Selon nos expérimentations, il serait plus difficile de partir de zéro l'application puis par la suite intégrer le SDK, que de partir du SDK et monter l'application désiré autour du code fourni. En revanche, il semble possible de créer l'application sans intégrer le SDK de l'application (ce que nous avons tenté à la fin).  
Le SDK de Facetec possède de nombreux composants additionnels et un webpack c'est donc en grande partie pour cela que l'on recommanderait de partir du sdk. (afin d'avoir tout le nécessaire)  
Si le projet est très grand, doit possèder beaucoup de fonctionnalités, ou se distribue à grande échelle, nous recommandons fortement de monter votre propre application et créer vos propres requêtes afin de les adapter plus facilement à vos besoins. ([voir fichier ](/screens/Components/API/api.tsx))  
[a relative link](App.tsx)
