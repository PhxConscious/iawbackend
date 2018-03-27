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

If the default port/database config don't work for you, you can customize them by adding a `tmp/ENV` file.  Here is an example with the default values:

```
export PORT=8080
export IAW_DB=iaw
export IAW_DB_HOST=127.0.0.1
```
