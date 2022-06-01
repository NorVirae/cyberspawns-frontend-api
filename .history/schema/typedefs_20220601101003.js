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
            chain: String,
            class: String,
            name: String,
            breedcount: Int,
            figures: String,
            createdAt: Int,
            updatedAt: Int,
            tokenId: Int,
            price: Float,
            children
        }
        `
   

module.exports = typeDefs