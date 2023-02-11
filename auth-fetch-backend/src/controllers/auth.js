const User = require('../models/user')
const { generateAccessToken, createHashedPassword } = require('../lib/util')

exports.register = async (req, res, next) => {
  const { email, username, password } = req.body

  if (!email) {
    return res.json({ error: 'Please input valid email address.' })
  } else if (!password) {
    return res.json({ error: 'Please input valid password.' })
  } else if (!username) {
    return res.json({ error: 'Please input valid username.' })
  }

  const hashedPassword = await createHashedPassword(password)

  const payload = {
    email,
    username,
    password: hashedPassword,
  }

  const newUser = new User(payload)
  newUser
    .save()
    .then(async (user) => {
      const token = await generateAccessToken({ email, username, id: user.id })
      
      return res.json({ code: 0, data: token })
    })
    .catch((err) => {
      console.error(err)
      return res.json({ code: 1, data: 'Email is already taken!'})
    })
}

exports.login = async (req, res, next) => {
  const { id, email, username} = req.user
  const token = await generateAccessToken({ id, email, username })

  return res.json({
    code: 0,
    data: token,
  })
}

