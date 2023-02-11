require('dotenv').config()

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const passport = require('passport')

const conf = require('./src/lib/config')
const routes = require('./src/routes')
const DBConnect = require('./src/lib/db_connector')
const SetPassport = require('./src/lib/passport')

const app = express()
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept")
  next()
})
app.use(passport.initialize())
// app.use(passport.session())
SetPassport(passport)

DBConnect()

routes(app)

const server = http.createServer(app)
server.listen(conf.PORT, '0.0.0.0', () => {
  console.info(`Server up and running on PORT : ${conf.PORT}`)
})
