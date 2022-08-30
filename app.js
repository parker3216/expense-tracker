const express = require('express')
require('./config/mongoose')



const app = express()



const PORT = 3000

app.get('/', (req,res) =>{
  res.send('hello')
})

app.listen(PORT ,() =>{
  console.log(`App is running on http://localhost:${PORT}`)
})