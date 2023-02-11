const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const conf = require('./config')

exports.generateAccessToken = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      data,
      conf.SECRET,
      {
        expiresIn: conf.ACCESS_TOKEN_EXPIRE_IN,
      },
      (err, token) => {
        if (err) reject(err)
        resolve(token)
      }
    )
  })
}

exports.createHashedPassword = (plainTxt) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(conf.CRYPT_SALT_ROUND, (err, salt) => {
      if (err) reject(err)
      bcrypt.hash(plainTxt, salt, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })
  })
}

exports.productFilter = (products, ctx) => {
  if (ctx === undefined) return products
  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(ctx.toLowerCase()) ||
      product.size.toLowerCase().includes(ctx.toLowerCase()) ||
      product.color.toLowerCase().includes(ctx.toLowerCase()) ||
      String(product.price).toLowerCase().includes(ctx.toLowerCase()) ||
      String(product.amount).toLowerCase().includes(ctx.toLowerCase())
    )
  })
}
