const express = require("express")
const Spawn = require("../models/mongodb/index")

const router = express.Router()

router.post("/spawn/nft/mint", (req, res) => {
    // fetch NFT from IPFS
    try{
        const newMintedSpawn = new Spawn
    }catch (err){

    }
})

module.exports = router;
