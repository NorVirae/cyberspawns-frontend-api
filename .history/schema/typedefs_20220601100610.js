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

        type BattleInfo
        `
   

module.exports = typeDefs