# iawbackend

## App Setup

```bash
npm install
```

## DB Setup

You can install postgres with homebrew:

```bash
createdb iaw
knex migrate:latest
knex seed:run
```

## Run the dev server

```bash
npm start
```

## Configuration

If the default port/database config don't work for you, you can run `npm run dev` and customize your config by adding a `tmp/ENV` file in the project directory.  Here is an example with the default values:

```
export PORT=8080
export IAW_DB=iaw
export IAW_DB_HOST=127.0.0.1
```

## Deploy to Heroku

App should deploy out of the box.  Heroku runs `npm start` by default.  For the database add a postgres addon in "Resources" tab.

If you've initialized the project with the heroku CLI you can deploy with git:

```
git push heroku master
```

To get the database in running state, use the following commands:

```bash
heroku run npx knex migrate:latest
heroku run npx knex seed:run
```
