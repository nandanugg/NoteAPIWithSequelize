# initializing
## heroku app
`heroku create app-name`
`heroku info`
> after creating an app, check there's a new remote in `git remote -v`

## postgres addon
`heroku addons:services | grep "postgres"` search addons called postgres
`heroku addons:create heroku-postgresql` install postgres addmin
`heroku addons --all` list addon with current app
`heroku pg:credentials:url` see postgress credential

## environment setting
`heroku config:set JWT_SECRET="Paraguay withdrawal" PGSSLMODE=no-verify`  set env var
`heroku config -s` see env var list

## node setting
`npm i -D sequelize-cli` 
add `build` script with value of `sequelize db:migrate`

## pushing
`heroku push -f heroku main`

## maintaining
`heroku logs --tail`
`heroku run bash`
`heroku restart`
`heroku apps:errors`
`heroku apps:destroy app-name --confirm app-name`
`heroku pg:info`
`heroku pg:psql`
`heroku pg:pull pg-name local-db-name`

## CICD
`heroku authorizations:create`


