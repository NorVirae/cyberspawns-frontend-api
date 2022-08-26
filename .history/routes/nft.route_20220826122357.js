const express = require("express")
const Spawn = require("../models/mongodb/")

const router = express.Router()

router.get("/nft/mint", (req, res) => {
    // fetch NFT from IPFS
    Spawn
})

module.exports = router;
