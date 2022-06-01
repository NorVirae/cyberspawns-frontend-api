const {PrismaClient} = r


const resolvers =  {
        Query: {
            hello: () =>{
                return "James"
            }
        },

        Mutation: {
            createSpawn: () => {

            }
        }
    }

module.exports = resolvers