const {gql} = require("apollo-server-express")


const typeDefs =  gql`
        type Query {
            fetchSpawn(token_id: ID): SpawnType
            # name: String
            fetchMarketPlaceSpawns: SpawnType
            
        }

        type Mutation {
            createSpawn(
                chain: String
                class: String
                createdAt: Int
                updatedAt: Int
                is_on_sale: Boolean
                market_type: String
                token_id: ID
                usdt_price: Int
                metadata_uri: String
                start_time: Int
                end_time: Int
                owner_address: String
                origin_owner_address: String
              
            ): SpawnType
        }

        

        type SpawnType {
            id: ID
            chain: String
            class: String
            createdAt: Int
            updatedAt: Int
            is_on_sale: Boolean
            market_type: String
            token_id: ID
            usdt_price: Int
            metadata_uri: String
            start_time: Int
            end_time: Int
            owner_address: String
            origin_owner_address: String

        }
        `
   

module.exports = typeDefs