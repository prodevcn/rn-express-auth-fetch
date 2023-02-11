const express = require('express')
const passport = require('passport')

const AuthController = require('../controllers/auth')
const DataController = require('../controllers/data')

const requireAuth = passport.authenticate('jwt', { session: false })
const requireLogin = passport.authenticate('local', { session: false })

module.exports = (app) => {
  const apiRoutes = express.Router()
  const authRoutes = express.Router()
  const dataRoutes = express.Router()

  apiRoutes.use('/auth', authRoutes)
  apiRoutes.use('/data', dataRoutes)
  apiRoutes.get('/check', (req, res) => {
    return res.json({ code: 0, data: 'Server is working properly.' })
  })

  authRoutes.post('/login', requireLogin, AuthController.login)
  authRoutes.post('/register', AuthController.register)
  // authRoutes.post('/forgot-password', AuthController.forgotPassword)
  // authRoutes.post('/reset-password', AuthController.resetPassword)

  dataRoutes.get('/fetch-user', requireAuth, DataController.fetchUser)
  dataRoutes.get('/fetch', requireAuth, DataController.fetchData)
  dataRoutes.post('/set', DataController.setData)

  app.use('/', apiRoutes)
}
