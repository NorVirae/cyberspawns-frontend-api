const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Spawn = new Schema({
    id: String,
    chain: String,
    class: String,
    createdAt: Number,
    updatedAt: Number,
    isOnSale: Boolean,
    marketType: String,
    usdtPrice: Number,
    metadataURI: String,
    baseURI: String,
    startTime: Number,
    endTime: Number,
    ownerAddress: String,
    originOwnerAddress: String,
    err: String,
    success: Boolean
})

module.exports = mongoose.model("Spawn", Spawn)