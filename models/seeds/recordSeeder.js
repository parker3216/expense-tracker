const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const User = require('../user')
const Record = require('../record')
const Category = require('../category')
const SeedData = require('./recordlist.json')


const SEED_USER = {
  name: '廣志',
  email: 'user1@example.com',
  password: '12345678'
}


db.once('open', async () => {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(SEED_USER.password, salt)
  const user = await User.create({
    name: SEED_USER.name,
    email: SEED_USER.email,
    password: hash
  })
  const userId = user._id
  for (const expense of SeedData) {
    const { name, date, amount, categoryID, categoryIcon } = expense
    const category = await Category.findOne({ id: categoryID })
    const categoryId = category._id
    const record = await Record.create(
      {
        name,
        date,
        amount,
        categoryId,
        categoryIcon,
        userId
      })
    console.log('user & record seeders loaded!')
  }
  process.exit()
})