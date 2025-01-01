const redis = require('redis');
const Promise = require('bluebird');

const client = redis.createClient({
    url: process.env.REDIS_URI
});

client.on('error', err => console.log('Redis Client Error', err));

client.connect();

Promise.promisifyAll(client);

module.exports = client;