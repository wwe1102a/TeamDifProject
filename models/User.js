const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


const UserSchema = new Schema({
    ID:{
        type:String,
        required :[true,'Please provide ID']
    }
    ,
    Password:{
        type:String,
        required :[true,'Please provide pass']

    }
        
})

UserSchema.pre('save',function(next){
    const user = this

    bcrypt.hash(user.Password, 10).then(hash=> {
        user.Password = hash
        next()
    }).catch(error=>{
        console.error(error)
    })

})

const User = mongoose.model('User', UserSchema)
module.exports = User 