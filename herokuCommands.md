## initializing
heroku app
`heroku create app-name`
> after creating an app, check there's a new remote in `git remote -v`

postgres addon
`heroku addons:services | grep "postgres"` search addons called postgres
`heroku addons:create heroku-postgresql` install postgres addmin
`heroku addons --all` list addon with current app
`heroku pg:credentials:url` see postgress credential

`heroku config:set DB_USERNAME="uehxssaksnxfse" DB_PASSWORD="f58ca6239bac4cc268e689bffaa00d84385e62fe5f6c54fd8e6882d1b2b6ce20" DB_DATABASE="dc3ffauv2bbl63" DB_HOST="ec2-54-144-251-233.compute-1.amazonaws.com" DB_DIALECT="postgres" JWT_SECRET="Paraguay withdrawal"`

`npm i -D sequelize-cli`
add `build` script with value of `sequelize db:migrate`
