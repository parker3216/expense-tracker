const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const Record = require('./models/record')
require('./config/mongoose')




const routes = require('./routes')
const usePassport = require('./config/passport')

const app = express()


app.engine('hbs' , exphbs({ defaultLayout: 'main' , extname: '.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true})) // setting body-parser



const PORT = 3000


app.use(session({
  secret: "GreatThing",
  resave: false,
  saveUninitialized: true
}))

usePassport(app) 



app.use(routes)


app.listen(PORT ,() =>{
  console.log(`App is running on http://localhost:${PORT}`)
})