# Mockable API

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cb9883b4f4f64022a3d97cb5fc1255ca)](https://app.codacy.com/manual/magaum/mockable-api?utm_source=github.com&utm_medium=referral&utm_content=magaum/mockable-api&utm_campaign=Badge_Grade_Dashboard)
[![Codecov](https://codecov.io/gh/magaum/mockable-api/branch/master/graph/badge.svg)](https://codecov.io/gh/magaum/mockable-api)
[![Build Status](https://travis-ci.org/magaum/mockable-api.svg?branch=master)](https://travis-ci.org/magaum/mockable-api)

API for mock http responses

## Get starting

A .env file should be created in root path, without this file the application will not start!

Below keys must be replaced with valid values.

| Keys              |
| ----------------- |
| SENTRY_DSN        |
| MONGO_USER        |
| MONGO_PASSWORD    |
| MONGO_URI         |
| REDIS_HOST        |
| REDIS_PORT        |
| REDIS_KEY_PREFIX  |
| REDIS_PASSWORD    |

After that execute: `docker-compose up`

Tip: If you want to see application logs add `DEBUG=mockable*` in .env file

## Debugging

Select "Docker" profile and press F5

## Tests

All tests are executed in docker with `npm test`

## Lint

Lint is executed with `npm run lint` command

## Application URLs

- Helth check: <http://localhost:3000>
- Documentation: <http://localhost:3000/docs>
