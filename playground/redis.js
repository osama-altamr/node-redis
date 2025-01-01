/*          test redis instance            */
redisClient.set('test', 'it is working fine')
redisClient.get('test', console.log)

redisClient.hset('germen', 'red', 'rot')
redisClient.hget('germen', 'red', console.log)

redisClient.set('myObj', JSON.stringify({ name: 'Mahmoud', age: 25 }))
redisClient.get('myObj', (err, val) => console.log(JSON.parse(val)))

redisClient.set('myKey', 'myValue', 'EX', 5)
redisClient.get('myKey')