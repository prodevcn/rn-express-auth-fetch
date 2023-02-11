const mongoose = require('mongoose')
const conf = require('./config')

module.exports = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(conf.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info('Server connected to database successfully!')
  })
  .catch((error) => {
    console.error('Server connection failure!', error)
  })
}
