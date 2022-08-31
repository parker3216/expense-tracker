const express = require('express')
const router = express.Router()

//首頁
router.get('/', (req, res) => {'index',
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.log(error))
})