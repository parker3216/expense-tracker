const Category = require('../category')
const db = require('../../config/mongoose')
const categoryData = require('./categorylist.json')


db.once('open', () => {
  Promise.all(Array.from(categoryData, CategorySEED => Category.create(CategorySEED)))
    .then(() => {
      console.log('category seeders loaded!')
      process.exit()
    })
})