const { Router } = require('express')

const router = Router()
const fs = require('fs')
const path = require('path')
const FilesWorker = require('./filesWorker')

const projectWorker = new FilesWorker('../content/projects');


router.get('/list', async (req, res) => {
  const files = await projectWorker.getFolderFilesList();
  res.status(200).send(files);
})

module.exports = router
