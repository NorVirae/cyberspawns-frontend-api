const express = require("express")
const Spawn = require("../models/mongodb/index")

const router = express.Router()

router.post("/spawn/nft/mint", (req, res) => {
    // fetch NFT from IPFS
    try{
        const newMintedSpawn = new Spawn({
            id: String,
    chain: String,
    class: String,
    pending: Boolean,
    marketType: String,
    metadataURI: String,
    baseURI: String,
    startTime: Number,
    endTime: Number,
    ownerAddress: String,
    originOwnerAddress: String,
    birthDate: Number,
    createdAt: Number,
    updatedAt: Number,
        })
    }catch (err){

    }
})

module.exports = router;
