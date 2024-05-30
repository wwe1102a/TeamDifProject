const User = require('../models/item')
//save item
module.exports = (req, res) => {
    User.create(req.body).then(()=>{
        console.log("User item Success")
        res.redirect('/home')
    }).catch((error)=>{
        console.log(error)
        
    })
}