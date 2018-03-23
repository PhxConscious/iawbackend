# iawbackend

## App Setup

```bash
npm install
npm i -g knex
```

## DB Setup

You can install postgres with homebrew:

```bash
brew install postgresql
createdb iaw
knex migrate:latest
knex seed:run
```

## Run the dev server

```bash
npm run start
```
