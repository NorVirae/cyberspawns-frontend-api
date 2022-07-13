const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            fetchSpawn(token_id: ID): SpawnType
            
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
              
                ): SpawnType
        }

        

        type SpawnType {
            id: ID
            ownerid: ID
            chain: String
            class: String
            createdAt: Int
            updatedAt: Int
            isOnSale: Boolean
            marketType: string
            token_id: Int
            usdtPrice: Int
            metadataUri: string
            startTime: Int
            endTime: Int
            address: string
        }
        `
   

module.exports = typeDefs