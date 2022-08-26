const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Spawn = new Schema({
    id: String,
    chain: String,
    class: String,
    createdAt: Number,
    updatedAt: Number,
    pending: Boolean,
    marketType: String,
   
    metadataURI: String,
    baseURI: String,
    startTime: Number,
    endTime: Number,
    ownerAddress: String,
    originOwnerAddress: String,
    
    success: Boolean
})

module.exports = mongoose.model("Spawn", Spawn)