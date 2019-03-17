const express = require('express')
const app = express()

const projects = require('./routes/projectRoutes.js')
const site = require('./routes/siteRoutes.js')

app.use('/projects', projects)
app.use('/site', site)

module.exports = {
  path: '/api',
  handler: app
}
