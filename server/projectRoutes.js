const { Router } = require('express')

const router = Router()
const fs = require('fs');

router.get('/list', (req, res) => {
  res.status(200).send('request completed')
})

module.exports = router
