require("dotenv").config()
const env = process.env.NODE_ENV
console.log(env, "HERE")
const config = {
    development:require("../env/development.config.json").DB,
    production:require("../env/production.config.json").DB
}
module.exports = config[env] || config["production"]