const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            fetchSpawn: Spawn
            fetchMarketPlaceSpawns: [Spawn]
            fetchDashboard: [Spawn]
        }

        type SpawnType {
            id: ID
            ownerid: ID
            birthdate: Int
            chain: String
            class: String
            name: String
            breedcount: Int
            figures: String
            createdAt: Int
            updatedAt: Int
            tokenId: Int
            price: Float
            children: [SpawnType]
            parents: [SpawnType]
            battleInfo: BattleInfoType
            spawnSkills: [SkillType]
            spawnAddress: SpawnAddressType
            spawnParts: SpawnPartsType
        }

        type UserType {
            id: ID
            username: String
            email: String
            password: String
            isActive: Boolean
            image: String
            isVerified: Boolean
        }

        type SpawnSkillType {
            id: Int
            spawnId: ID
            skill1: ID
            skill2: ID
            skill3: ID
        }

        type SpawnAddressType {
            spawnId: ID
            metadata: String
            imageAtlas: String
            atlas: String  
            imageAddress: String
        }

        type SkillType {
            id: ID
            imageAddress: String
            metaDataAddress: String
        }

        type SpawnPartsType {
            id: ID
            name: String
            imageAddress: String
            class: String
            level: Int
        }

        type BattleInfoType {
            spawnId: ID
            level: Int
            battlesWon: Int
            level: Int
        }

        
        `
   

module.exports = typeDefs