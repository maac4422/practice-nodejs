const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())


//const users = require('./routes/users')
const routes = require('./routes/routes')
//app.use('/api/v1/users', users)

routes.assignRoutes(app)
module.exports = app
