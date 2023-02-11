const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    methods: {
      comparePassword(password, cb) {
        bcrypt.compare(password, this.password, (err, isMatch) => {
          if (err) return cb(err)
          cb(null, isMatch)
        })
      }
    }
  }
)

UserSchema.set('toJSON', {
  virtuals: true,
})

module.exports = User = mongoose.model('user', UserSchema)
