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
[SDK - Facetec](https://dev.facetec.com/downloads) - [aws - instance EC2](https://aws.amazon.com/fr/ec2/)  
  
Base de données : Facetec recommande d'utiliser MongoDB, mais une utilisation d'un autre moteur de gestion de BD est possible (recommendation format JSON)
#

[a relative link](App.tsx)
