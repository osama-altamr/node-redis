## Node and Redis
> Simple API project to explore how to use and build a caching layer with NodeJS and Redis

# Prerequisite
You have to have redis server installed in your local machine,
you can simply install it from the [Official Website](https://redis.io/download) 

## General structure for the used cahcing system
* Is to create a hook before fetching/execute query, to check if we have a cached data for that query
* Create unique and consistent caching keys
* Build a middleware that guarantees the synchronization between the cached data and database (Automatic Expiration Criteria)

## Used NPM Packages for Caching
1. `redis` 
2. `bluebird` to promisify redis methods