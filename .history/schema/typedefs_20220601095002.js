const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            hello: String
        }

        type UserType {
            id: ID
            
        }
        
        `
   

module.exports = typeDefs