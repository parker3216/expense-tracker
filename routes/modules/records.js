const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

//新增支出頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

//新增支出資料->將form送往database
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, date, category, amount } = req.body
  return Record.create({ name, date, category, amount })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
