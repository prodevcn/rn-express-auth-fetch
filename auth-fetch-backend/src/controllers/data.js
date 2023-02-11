const Product = require('../models/product')
const { productFilter } = require('../lib/util')

exports.fetchData = (req, res, next) => {
  const ctx = req.query.search

  Product.find()
    .then((data) => {
      return res.json({ code: 0, data: productFilter(data, ctx) })
    })
    .catch((error) => {
      console.error(error)
      return res.json({
        code: 1,
        data: 'Something went wrong, please try in a few moments.',
      })
    })
}

exports.setData = (req, res, next) => {
  const { products } = req.body
  Product.insertMany(products, (error, docs) => {
    if (error) {
      console.error(error)
    }
    return res.json({ code: 0, data: docs })
  })
}

exports.fetchUser = (req, res, next) => {
  const data = {email: req.user.email, username: req.user.username}
  return res.json({code: 0, data: data})
}