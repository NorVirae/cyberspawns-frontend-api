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
            

        
        `
   

module.exports = typeDefs