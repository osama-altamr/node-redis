const mongoose = require('mongoose'),
      redisClient  = require('../caching/redis')
      
const exec = mongoose.Query.prototype.exec

mongoose.Query.prototype.cache = function(options = {}) {
    this.applyCache = true
    this.hashKey = JSON.stringify(options.key || 'default')
    return this
}

mongoose.Query.prototype.exec = async function() {
    if (!this.applyCache) {
        return exec.apply(this, arguments)
    }
    const key = JSON.stringify(
        Object.assign({}, this.getQuery(), {collection: this.mongooseCollection.name})
    )
    const cahcedValue = await redisClient.hGet(this.hashKey, key)
    if (cahcedValue) {
        const result = JSON.parse(cahcedValue)
        return Array.isArray(result)
                ? result.map(r => new this.model(r))
                : new this.model(result)
    }
    const result = await exec.apply(this, arguments)
    redisClient.hSet(this.hashKey, key, JSON.stringify(result))
    return result
}

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
module.exports = {
    mongoose,
    clearCache(options = {}) {
        const key = JSON.stringify(options.key || 'default')
        redisClient.del(key)
    }
}