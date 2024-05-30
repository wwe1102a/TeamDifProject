const things = require("../models/item");

module.exports = (req, res, next) => {
    things.find().then((things) => {
        console.log(things);
    }).catch((error) => {
        console.error('Error fetching data:', error);
    });


    next()
}
   
