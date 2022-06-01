const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            hello: String
        }

        type UserType {
            id: ID
            username:{type:GraphQLString},
            email:{type:GraphQLString},
            password:{type: GraphQLString},
            isActive:{type:GraphQLBoolean},
            image:{type:GraphQLString},
            isVerified:{type:GraphQLBoolean}
        }
        
        `
   

module.exports = typeDefs