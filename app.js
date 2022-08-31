const express = require('express')
const exphbs = require('express-handlebars')
const Record = require('./models/record')
require('./config/mongoose')




const app = express()


app.engine('hbs' , exphbs({ defaultLayout: 'main' , extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true})) // setting body-parser



const PORT = 3000


//首頁
app.get('/', (req,res) =>{'index',
  Record.find()
    .lean()
    .then( records => res.render('index' , { records}))
    .catch(error => console.log(error))
})

//新增支出頁面
app.get('/records/new' , (req,res) => {
  return res.render('new')
})

//新增支出資料->將form送往database
app.post('/records', (req,res) => {
 const userId = req.user._id
 const { name, date, category, amount }= req.body
  return Record.create({ name, date, category, amount })
  .then(() => res.redirect('/'))
  .catch(error => console.log(error))
})

app.listen(PORT ,() =>{
  console.log(`App is running on http://localhost:${PORT}`)
})