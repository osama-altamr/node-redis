const express = require('express')
const blogController = require('./blog.controller'),
      clearCache = require('../../../../middlewares/clearCache')    

const blogRouter = express.Router()

blogRouter.route('/')
    .get(blogController.getAll)
    .post(clearCache, blogController.create)

module.exports = blogRouter