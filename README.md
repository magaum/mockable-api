# Mockable API

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9cd72c32c3c04401b34b4ea7e811044c)](https://www.codacy.com/manual/magaum/mockable-api?utm_source=github.com&utm_medium=referral&utm_content=magaum/mockable-api&utm_campaign=Badge_Grade)

API for mock http responses

## Get starting

A .env file should be created in root path, without this file the application will not start!

Below keys must be replaced with valid values.

| Keys           |
| -------------- |
| SENTRY_DSN     |
| MONGO_USER     |
| MONGO_PASSWORD |

After that execute: `docker-compose up`

## Debugging

Select "Docker" profile and press F5

## Tests

All tests are executed in docker with `npm test`

## Lint

Lint is executed with `npm run lint` command
