const mongoose = require("mongoose");

const Schema = mongoose.Schema

const Spawn = new Schema({
    id: ID,
    chain: String,
    class: String,
    createdAt: Number,
    updatedAt: Number,
    is_on_sale: Boolean,
    market_type: String,
    usdt_price: Number,
    metadata_uri: String,
    base_uri: String,
    start_time:     token_id: ID,
    ,
    end_time: Int,
    owner_address: String,
    origin_owner_address: String,
    err: String,
    success: Boolean
})