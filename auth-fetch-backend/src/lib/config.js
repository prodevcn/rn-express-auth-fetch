module.exports = {
  PORT: Number(process.env.PORT),
  SECRET: process.env.SECRET,
  DB_URL: process.env.DB_URL,
  ACCESS_TOKEN_EXPIRE_IN: Number(process.env.ACCESS_TOKEN_EXPIRE_IN),
  CRYPT_SALT_ROUND: Number(process.env.CRYPT_SALT_ROUND)
}