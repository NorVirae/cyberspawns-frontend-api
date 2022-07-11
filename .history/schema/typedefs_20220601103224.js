const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            hello: String
            fetchSpawn: Spawn
        }

        type UserType {
            id: ID
            username: String,
            email: String,
            password: String,
            isActive: Boolean,
            image: String,
            isVerified: Boolean
        }

        type SpawnSkillType {
            id: Int,
            spawnId: ID,
            skill1: ID,
            skill2: ID,
            skill3: ID,
        }

        type SpawnAddressType {
            spawnId: ID,
            metadata: String,
            imageAtlas: String,
            atlas: String,  
            imageAddress: String
        }

        type SkillType {
            id: ID,
            imageAddress: String,
            metaDataAddress: String,
        }

        type SpawnPartsType {
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
            children: [Spawn],
            parents: [Spawn],
            battleInfo: BattleInfo,
            spawnSkills: [Skill]
            spawnAddress: spawnAddress
        }
        `
   

module.exports = typeDefs