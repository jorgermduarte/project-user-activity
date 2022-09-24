# Node typescript api template

A api template project for express with typescript.

# Example .env file

```
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=
    MYSQL_DATABASE=mysql_database_name
    PORT=8080

    MYSQL_HOST_PROD=db
    MYSQL_USER_PROD=produser
    MYSQL_PASSWORD_PROD=123456

    PHP_MYADMIN_PORT=9000
```

## Commands

```
    "build": "tsc",
    "eslint:fix": "eslint src/**/*.ts --fix",
    "eslint:check": "eslint src/**/*.ts",
    "start": "npm run build && node dist/web-api/server.js",
    "prepare": "husky install"
```

## Project features

- husky
- eslint
- typescript
- nodejs
- docker
- express-validators
- express
- error handling
- clean architecture
- docker-compose
- middlewares
- not found middleware
- loggers
- dependabot
- github workflows
