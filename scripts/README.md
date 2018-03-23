Scripts!

These scripts can be used to start/stop/restart a postgres server, if you have docker installed (that would be docker-machine on a mac).

```
./scripts/start-pg
./scripts/stop-pg
./scripts/restart-pg
```

When you stop/start the database it will be recreated from scratch, so you'll need to re-run migrations and seed data:

```
knex migrate:latest
knex seed:run
```

To configure your app to see the postgres server you'll need to create a file at `tmp/ENV` in this project directory with the following contents:

```bash
export IAW_DB=iaw
export IAW_DB_HOST=[ip of your docker machine]
export IAW_DB_USER=postgres
export IAW_DB_PASSWORD=elephant
```

You find out the docker-machine's IP by typing `docker-machine ls`.  Or if you're on linux, you'll be running docker directly on your localhost, so your `IAW_DB_HOST` will just be `127.0.0.1`.
