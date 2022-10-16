.DEFAULT_GOAL = help

help:
	echo "Hello";
.PHONY: help



# demarrage symfony
symfony-start:
	symfony server:start
.PHONY : symfony-start

# demarrage symfony mode dev execution en arrier-plan
symfony-start-dev:
	symfony server:start -d
.PHONY : symfony-start-dev

# Arret du serveur symfony 
symfony-stop:
	symfony server:stop
.PHONY : symfony-stop

# Demmarage du client en mode developpement
dev-client:
	npm run dev-server
.PHONY : dev-client	

# Demmarage du serveur symfony uniquement 
sf-start :
	$(MAKE) symfony-stop
	$(MAKE) symfony-start
.PHONY : sf-start

# Demmarage du Projet en mode developpement dont symfony en tache de fond plans
sf-start-dev:
	$(MAKE) symfony-stop
	$(MAKE) symfony-start-dev
	$(MAKE) dev-client
.PHONY : sf-start-dev

# Nettoyer le cahche symfony
sf-cache:
	php bin/console cache:clear
.PHONY : sf-cache