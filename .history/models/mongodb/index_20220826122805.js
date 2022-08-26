const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Spawn = new Schema({
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
    birthDate: Number;
    createdAt: Number,
    updatedAt: Number,
})

module.exports = mongoose.model("Spawn", Spawn)