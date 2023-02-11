const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local')

const conf = require('./config')

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: conf.SECRET,
}

const localOptions = {
  usernameField: 'email',
}

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => {
      done(error, user)
    })
  })

  passport.use(
    new LocalStrategy(localOptions, (email, password, done) => {
      User.findOne({ email })
        .then((user) => {
          if (!user) {
            console.error('[Error]:[Email not found]')
            return done(null, false, { message: 'Incorrect email address' })
          }
          user.comparePassword(password, (error, isMatch) => {
            if (error) {
              console.error('[Error]:[Wrong password]', error)
              return done(error)
            }
            if (!isMatch) {
              console.log('[Info]:[Wrong password]')
              return done(null, false, { message: 'Incorrect password' })
            }
            console.log(user)
            return done(null, user)
          })
        })
        .catch((error) => {
          return done(error)
        })
    })
  )

  passport.use(
    new JwtStrategy(jwtOptions, (payload, done) => {
      User.findOne({ _id: payload.id }, (error, user) => {
        if (error) {
          console.error(error)
          return done(error, false)
        }
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
    })
  )
}
