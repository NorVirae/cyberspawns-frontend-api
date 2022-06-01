const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const resolvers =  {
        Query: {
            hello: () =>{
                return "James"
            }
        },

        Mutation: {
            createSpawn: async () => {
                await prisma.spawn.create({
                    data: {
                        owner_id: "9f7f12de-850b-4f83-94f2-2f350ff77b01",
                        owner_id String,
                        birth_date DateTime,
                        chain String,
                        class String,
                        name String,
                        breed_count Int,
                        figures String,
                        token_id Int,
                        price Float,
                    }
                })
            }
        }
    }

module.exports = resolvers