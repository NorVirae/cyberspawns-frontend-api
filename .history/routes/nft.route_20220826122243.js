const express = require("express")

const Spawn = require("./")

const router = express.Router()

router.get("/nft/mint", (req, res) => {
    // fetch NFT from IPFS
    Spawn
})

module.exports = router;
