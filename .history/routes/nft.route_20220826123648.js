const express = require("express")
const Spawn = require("../models/mongodb/index")

const router = express.Router()

router.post("/spawn/nft/mint", (req, res) => {
    // fetch NFT from IPFS
    const body = req.body
    try{
        const newMintedSpawn = new Spawn(body)
        console.log
    }catch (err){

    }
})

module.exports = router;
