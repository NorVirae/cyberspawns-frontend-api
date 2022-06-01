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
            id: Int,
            spawnId: ID,
            skill1: ID,
            skill2: ID,
            skill3: ID,
        }

        type SpawnAddress {
            spawnId: ID,
            metadata: String,
            imageAtlas: String,
            atlas: String,  
            imageAddress: String
        }

        type Skill {
            id: ID,
            imageAddress: String,
            metaDataAddress: String,
        }

        type SpawnParts {
            id: ID,
            name: String,
            imageAddress: String,
            class: String,
            level: Int,
        }

        type BattleInfo {
            spawnId: ID,
            level: Int,
            battlesWon: Int,
            level: Int,
        }

        type Spawn {
            id: ID,
            ownerid: ID,
            birthdate: Int,
            chain:{type: GraphQLString},
            class:{type:GraphQLString},
            name:{type:GraphQLString},
            breedcount:{type:GraphQLInt},
            figures:{type:GraphQLString},
            createdAt:{type:GraphQLInt},
            updatedAt:{type:GraphQLInt},
            tokenId:{type:GraphQLInt},
            price:{type:GraphQLFloat},
        }
        `
   

module.exports = typeDefs