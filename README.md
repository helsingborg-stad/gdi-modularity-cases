
# GDI Modularity Cases

Modularity Module that allows authenticated users to manage list, group and filter cases. This is a React app wrapped within a Wordpress plugin as a Modularity module.

## Getting started

```zsh
# clone repo into wp-content/plugins folder
git clone https://github.com/helsingborg-stad/gdi-modularity-cases.git

# install composer dependencies
composer install

# install npm dependencies
yarn

# build scripts
yarn build

# watch scripts (for development)
yarn watch

# activate wordpress plugin (using wp-cli)
wp plugin activate gdi-modularity-cases --url=example.local

# configure graphql endpoint (using wp-cli)
wp option update options_CASES_graphql_uri http://localhost:3000/api/v1/aboutme/graphql --url=example.local

```

## Getting started (Headless without Wordpress)

This plugin can be run without Wordpress (for development).

```zsh
# install dependencies
yarn

# copy example env 
cp .env.example .env

# start web server
yarn start
```
