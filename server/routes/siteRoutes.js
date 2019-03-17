const { Router } = require('express')

const router = Router()
const FilesWorker = require('./../filesWorker')
const siteWorker = new FilesWorker('./../content/site')

router.get('/settings', async (req, res) => {
  const files = await siteWorker.getFiles()
  res.status(200).send(files[0])
})

module.exports = router
