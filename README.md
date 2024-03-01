# Personal Goal Setting

This app is for those who is learning to build React/NodeJS front end and use api service. It helps to understand NodeJS packages and code structuring, TypeScript and API interactions.  It has two parts:

1. OGO : Front end - typescript and react
2. OGP : API service - Ruby on Rails

### Run the project

Clone the repo. Open two terminal tabs, one for service and next for fornt end.

## OGP - API service

```
 1. Install rvm from https://rvm.io/
  rvm install ruby 3.1.3
  rvm use 3.1.3

 2. Install postgres, see link below
  sudo apt-get -y install postgresql
  sudo apt-get install libpq-dev
  sudo systemctl status postgresql
  sudo -i -u postgres
  psql
  createuser --interactive
  \password postgres

 3. Install Bundler and Rails
  gem install bundler
  bundle install

 4. DB creation and seed
  rake db:create
  rake db:migrate
  rake db:seed
  rails s

 5. Review and Testing
  bundle exec rubocop --format offenses
  bundle exec rubocop -a
```

* [POSTGRES](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-20-04s)
* [RAPI DOCS](https://github.com/phuc/rapi_doc)

 ## OGO - Frontend components

```
  1. Node Version Manager - nvm
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
	nvm ls-remote
	nvm install v14.21.3

  2. Node Package Manager - npm
	sudo apt install npm

  3. React
	rm -r node_modules
	npm i --save react react-dom react-scripts
	npm i

  4. Node Package eXecutor - npx
	npx create-react-app my-app (as example)

  5. Typescript - ts
	npm install typescript -g 

  6. Start app
	sudo apt update
	sudo apt install nodejs
	node -v
	sudo apt install npm
```

* [Node Installation](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
* [Pull Request template](https://github.com/stevemao/github-issue-templates)
