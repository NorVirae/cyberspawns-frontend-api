


const resolvers = () => {
    return {
        Query: {
            hello: () =>{
                return "James"
            }
        }
    }
}

module.exports = resolvers