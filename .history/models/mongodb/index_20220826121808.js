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
    meta: String,
    base_uri: String,
    start_time: Number,
    end_time: Number,
    owner_address: String,
    origin_owner_address: String,
    err: String,
    success: Boolean
})