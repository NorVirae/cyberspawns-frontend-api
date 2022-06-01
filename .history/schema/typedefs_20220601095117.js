const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            hello: String
        }

        type UserType {
            id: ID
            username: String,
            email: String,
            password: String,
            isActive: Boolean,
            image:{type:GraphQLString},
            isVerified:{type:GraphQLBoolean}
        }
        
        `
   

module.exports = typeDefs