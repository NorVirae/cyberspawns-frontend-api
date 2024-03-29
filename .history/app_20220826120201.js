const express = require('express');
const typeDefs = require('./schema/typedefs')
const resolvers = require('./schema/resolvers')
const mongoose = require('mongoose');


const graphqlHTTP = require('express-graphql').graphqlHTTP;
const cors = require('cors');
const Pool = require('./db/db');
const schema = require("./schema/schema")
const {ApolloServer,  gql} = require('apollo-server-express')
require('dotenv').config()

const server = new ApolloServer({typeDefs, resolvers})

const app = express()
const runApolloServer = async () =>{
    await server.start()
    server.applyMiddleware({ app })
}

runApolloServer()


mongoose.connect(process.env.MONGODB_URL).then(res => {
    console.log("Mongo DB connected successfully!")
})

app.use(cors())
app.use(express.json())

app.use("/api", require("./routes/nft.route"))


app.get("/", (req, res)=>{
    res.json({msg:"connection was successful!"})
})

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql:true
// }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

app.post("/create/spawn", async(req, res)=> {

    try{
        const data = req.body
        const newSpawn = await Pool.query(`INSERT INTO spawns(spawnid, ownerid, birthdate, chain, level, class, name, parts, breedcount) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
         [data.spawnid, data.ownerid, data.birthdate, data.chain, data.level, data.class, data.name, data.parts, data.breedcount])
        res.send({data:newSpawn, msg: "CHECK HERE"})

    }catch(err){

        res.send(err)

    }
})


const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log("connection successful on port: "+port)
    console.log(process.env.NODE_ENV)
})