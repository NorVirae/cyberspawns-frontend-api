require("dotenv").config()
const env = process.env.NODE_ENV
// console.log(env, "HERE")
const config = {
    development:require("../env/development.config").DB,
    production:require("../env/production.config").DB
}
module.exports = config["production"] || config["production"]