const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const resolvers =  {
        Query: {
           
        },

        Mutation: {
            createSpawn: async () => {
                await prisma.spawn.create({
                    data: {
                        owner_id: "9f7f12de-850b-4f83-94f2-2f350ff77b01",
                        birth_date: DateTi.now(),
                        chain: "0xa332bFdad3FC98abB965Ebc54EBfF593D246dD0D",
                        class: "ave",
                        name: "oga",
                        breed_count: 20,
                        figures: "20",
                        token_id: 12,
                        price: 30.4,
                    }
                })
            }
        }
    }

module.exports = resolvers