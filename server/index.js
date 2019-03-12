const express = require('express')
const app = express()

const projects = require('./projectRoutes.js')

app.get('/list', (req, res) => {
  res.status(200).send('request complete')
})

app.use('/projects', projects)

module.exports = {
  path: '/api',
  handler: app
}
