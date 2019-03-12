const express = require('express')
const app = express()

const projects = require('./projectRoutes.js')

app.use('/projects', projects)

module.exports = {
  path: '/api',
  handler: app
}
