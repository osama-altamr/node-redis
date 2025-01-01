const express = require('express')

const blogRouter = require('./resources/blog/blog.router')

const restRouter = express.Router()

restRouter.use('/blogs', blogRouter)

module.exports = restRouter