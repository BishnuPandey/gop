# mygoals
This repository contains API service to manage roadmaps and initiatives for team which goes down to individuals. Along with API service, a single page interface  is built for users.

Folder "OGO" - is user interface repo which is built using typescript and react

Folder "OGP" - is API service backed by Ruby on Rails


# installation

OGP - API service

 1. Install rvm from https://rvm.io/
 	rvm install ruby 3.1.3
 	rvm use 3.1.3

 2. Install pg from https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04s
 	sudo apt-get -y install postgresql
 	 sudo apt-get install libpq-dev
 	sudo systemctl status postgresql

 	sudo -i -u postgres
 	psql

 	createuser --interactive
 	 \password postgres

 	Tutorial: https://www.postgresqltutorial.com/
 	https://hasura.io/blog/top-psql-commands-and-flags-you-need-to-know-postgresql/

 3. Install bundler and Rails
 	gem install bundler
 	bundle install

 4. DB creation and seed
 	rake db:create
 	rake db:migrate
 	rake db:seed
 	rails s

 5. Review and Testing
 	https://semaphoreci.com/blog/rubocops
 	bundle exec rubocop --format offenses
 	bundle exec rubocop -a

    brakeman

    rapi_doc #https://github.com/phuc/rapi_doc


 OGO - Frontend components

 	1. nvm - Node Version Manager
 		curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

 		nvm ls-remote
 		nvm install v14.21.3

 	2. npm - Node Package Manager

 		sudo apt install npm

 	3. react
 		rm -r node_modules
 		npm i --save react react-dom react-scripts
		npm i

 	3. npx
 		Node Package eXecutor

 	3. typescript

 	4. react

 	5. start app

 	https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
 	Option 3 — Installing Node Using the Node Version Manager

 	sudo apt update
 	sudo apt install nodejs
 	node -v
 	sudo apt install npm


GitHub PR template
	https://github.com/stevemao/github-issue-templates
