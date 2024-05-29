const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')


const UserSchema = new Schema({
    ID:{
        type:String
    }
    ,
    Password:{
        type:String

    }
        
})

UserSchema.pre('save',function(next){
    const user = this

    bcrypt.hash(user.Password, 10).then(hash=> {
        user.Password = hash
        next()
    }).catch(error =>{
        console.log(error(err))
    })

})

const User = mongoose.model('User', UserSchema)
module.exports = User 