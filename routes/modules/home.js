const express = require('express')
const router = express.Router()
const Category = require('../../models/category')
const Record = require('../../models/record')



router.get('/', (req, res) => {
    const userId = req.user._id
    const choice = req.query.choice
    let selectTitle = '類別'
    let totalAmount = 0
    if (!choice) {
        Record.find({ userId })
            .lean()
            .sort({ _id: 'asc' })
            .then(records => {
                records.filter(record => {
                    totalAmount += record.amount
                })
                return res.render('index', { records, totalAmount, selectTitle })
            })
            .catch(err => console.log(err))
    } else {
        Category.findOne({ id: choice })
            .then(category => {
                const categoryId = category._id
                const categoryName = category.name
                let selectTitle = categoryName
                Record.find({ categoryId })
                    .lean()
                    .then(records => {
                        records.filter(record => {
                            totalAmount += record.amount
                        })
                        return res.render('index', { records, totalAmount, selectTitle })
                    })
                 })
                }
            })


module.exports = router