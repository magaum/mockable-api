# Mockable API

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
