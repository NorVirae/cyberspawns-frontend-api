const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            fetchSpawn(id: ID): SpawnType
            fetchMarketPlaceSpawns: [SpawnType]
            fetchDashboardSpawns: [SpawnType]
            fetchDashboardRecentlyListed: [SpawnType]
            fetchDashboardRecentlySold: [SpawnType]
        }

        type Mutation {
            createSpawn(
                owner_id: String
                chain: String
                class: String
                name: String
                breed_count: Int
                figures: Int
                token_id: Int
                price: Float
                skills: [String]
                metadata: String
                imageAtlas:String
                atlas:String
                imageAd:dress:String
                level: Int
                battles_won: Int
                battles_lost:
                ): SpawnType
            editSpawn: SpawnType
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
            sold: Boolean
            adult: Boolean
            origin: Boolean
            child: Boolean
            deleteCount: Int
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
            spawn_id: ID
            skill1: ID
            skill2: ID
            skill3: ID
        }

        type SpawnAddressType {
            spawn_id: ID
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
            spawn_id: ID
            level: Int
            battlesWon: Int
            
        }

        
        `
   

module.exports = typeDefs