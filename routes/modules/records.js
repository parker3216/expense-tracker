const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')


//create record page
router.get('/new', (req, res) => {
  res.render('new')
})

//create record router
router.post('/', (req, res) => {
  const { name, date, category, amount } = req.body
  const userId = req.user._id
  const id = Number(category)
  Category.findOne({ id })
          .lean()
          .then(category => {
            return Record.create({ 
              name, 
              date, 
              amount, 
              categoryId:category._id,
              categoryIcon:category.icon, 
              userId 
            })
              .then(() => res.redirect('/'))
              .catch(err => console.log(err))
    })
})

//edit record page
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOne({ _id, userId })
        .lean()
        .then(record => {
          res.render('edit' , {record} )
        })
})

//edit record router
router.put('/:id', (req,res) => {
  const _id = req.params.id
  const id = req.body.category
  const userId = req.user._id
  Category.findOne({ id })
          .lean()
          .then(category => {
          const { name, date, amount } = req.body
          return Record.findOneAndUpdate({ _id, userId},{
            name,
            date,
            amount,
            categoryId:category._id,
            categoryIcon:category.icon,
          })
          })
          .then(() => res.redirect('/'))
          .catch(err => console.log(err))
})

//delete record router
router.delete('/:id', (req,res) => {
  const userId = req.user._id
  const _id = req.params.id
  Record.findOneAndDelete({ _id, userId })
        .then(() => res.redirect('/'))
        .catch(err =>console.log(err)) 
})

module.exports = router
