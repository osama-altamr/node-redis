const express = require('express'),
      bodyParser = require('body-parser')

const env  = require('./config/config'), 
      redisClient = require('./server/caching/redis'),
      { mongoose } = require('./server/database/mongoose'),
      restRouter = require('./src/api/api-routes')
    
const app = express()

app.use(bodyParser.json())
const PORT = process.env.PORT

app.use('/api', restRouter)

app.listen(PORT, () => console.log(`Application is up and running in ${env} mode on port ${PORT}`))