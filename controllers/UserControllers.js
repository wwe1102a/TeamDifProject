const bcrypt = require('bcrypt')
const User = require('../models/User')
const { request } = require('express')

module.exports = (req, res) =>{
    const { ID,Password } = req.body
    
    User.findOne({ID:ID }).then((user)=>{
        console.log(user)
        if(user){
            let cmp = bcrypt.compare(Password,user.Password).then((match)=>{
                if(match){
                    req.session.userId = user._id
                    res.redirect('/home')

                }else{
                    res.redirect('/login')
                }
            })
        }else{
            res.redirect('/login')
        }
    })


}