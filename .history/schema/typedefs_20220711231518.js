const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            fetchSpawn(id: ID): SpawnType
            
        }

        type Mutation {
            createSpawn(
                ownerId: String
                chain: String
                class: String
                token_id: Int
                metadata: String
                isOnSale: Boolean
                marketType: String
                token_id: Int
                usdtPrice: Int
                metadataUri: string
                startTime: Int
                endTime: Int
                address: string
                # name: String
                # breedCount: Int
                # figures: Int
                # price: Float
                # skills: [String]
                # imageAtlas:String
                # atlas:String
                # imageAddress:String
                # level: Int
                # battlesWon: Int
                # battlesLost: Int
                # partName: String
                # partImageAddress: String
                # partClass: String
                # partLevel: String
                ): SpawnType
            editSpawn: SpawnType
            createOffer: Offertype
            createAuction:
        }

        

        type SpawnType {
            id: ID
            ownerid: ID
            chain: String
            class: String
            createdAt: Int
            updatedAt: Int
            tokenId: Int
            isOnSale: Boolean
            marketType: string
            # birthdate: Int
            
            # name: String
            # breedcount: Int
            # figures: String
            
            # price: Float
            
            # adult: Boolean
            # origin: Boolean
            # child: Boolean
            # deleteCount: Int
            # children: [SpawnType]
            # parents: [SpawnType]
            # battleInfo: BattleInfoType
            # spawnSkills: [SkillType]
            # spawnAddress: SpawnAddressType
            # spawnParts: SpawnPartsType
        }

        # type UserType {
        #     id: ID
        #     username: String
        #     email: String
        #     password: String
        #     isActive: Boolean
        #     image: String
        #     isVerified: Boolean
        # }

        # type SpawnSkillType {
        #     id: Int
        #     spawn_id: ID
        #     skill1: ID
        #     skill2: ID
        #     skill3: ID
        # }

        # type SpawnAddressType {
        #     spawn_id: ID
        #     metadata: String
        #     imageAtlas: String
        #     atlas: String  
        #     imageAddress: String
        # }

        # type SkillType {
        #     id: ID
        #     imageAddress: String
        #     metaDataAddress: String
        # }

        # type SpawnPartsType {
        #     id: ID
        #     name: String
        #     imageAddress: String
        #     class: String
        #     level: Int
        # }

        # type BattleInfoType {
        #     spawn_id: ID
        #     level: Int
        #     battlesWon: Int
            
        # }

        
        `
   

module.exports = typeDefs