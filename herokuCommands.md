## initializing
heroku app
`heroku create app-name`
> after creating an app, check there's a new remote in `git remote -v`

postgres addon
`heroku addons:services | grep "postgres"` search addons called postgres
`heroku addons:create heroku-postgresql` install postgres addmin
`heroku addons --all` list addon with current app
`heroku pg:credentials:url` see postgress credential

`heroku config:set JWT_SECRET="Paraguay withdrawal"`
heroku config -s

`npm i -D sequelize-cli`
add `build` script with value of `sequelize db:migrate`
