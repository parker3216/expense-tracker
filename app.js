const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const Record = require('./models/record')
const flash = require('connect-flash')
if (process.env,NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./config/mongoose')

const routes = require('./routes')
const usePassport = require('./config/passport')

const PORT = process.env.PORT
const app = express()

app.engine('hbs' , exphbs({ defaultLayout: 'main' , extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true})) // setting body-parser

app.use(session({
  secret: process.env.SESSION_SECRET ,  
  resave: false,
  saveUninitialized: true
}))

usePassport(app) 
app.use(flash())
app.use((req,res,next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

app.use(routes)

app.listen(PORT ,() =>{
  console.log(`App is running on http://localhost:${PORT}`)
})