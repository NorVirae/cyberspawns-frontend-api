const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            hello: String
        }

        type User {
            id: ID
            username: String,
            email: String,
            password: String,
            isActive: Boolean,
            image: String,
            isVerified: Boolean
        }

        type SpawnSkill {
            id:In,
            spawnId:{type:GraphQLID},
            skill1:{type:GraphQLID},
            skill2:{type: GraphQLID},
            skill3:{type:GraphQLID},
        }
        
        `
   

module.exports = typeDefs