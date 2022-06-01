import {gql} from "apollo-server-express"


const typeDefs = () => {
    return gql`
        type Query {
            hello: String
        }
    `;
}