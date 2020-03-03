const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const routes = require('./routes/index.js')

express()
  .use('/public', express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', routes.index)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
