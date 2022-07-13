require("dotenv").config()
const env = process.env.NODE_ENV
// console.log(env, "HERE")
const config = {
    development:require("../env/development.config").DB,
    production:require("../env/production.config").DB
}
module.exports = config["production"] || config["production"]9074b80b-f8cb-4838-affe-9961d4502f9f