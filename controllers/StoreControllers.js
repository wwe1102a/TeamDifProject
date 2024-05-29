const User = require('../models/User')

module.exports = (req, res) => {
    User.create(req.body).then(()=>{
        console.log("User register Success")
        res.redirect('/')
    }).catch((error)=>{
        console.log(error)
        
    })
}