const mongoose = require('mongoose')
const Schema = mongoose.Schema



const items = new Schema({
    name:{
        type:String,
        required :[true,'Please provide name']
    }
    ,
    price:{
        type:String,
        required :[true,'Please provide price']

    }
    ,
    info:{
        type:String,
        required :[true,'Please provide info']
    }
        
})

const Things = mongoose.model('item', items)
module.exports = Things