const Things = require("../models/item");

module.exports = (req, res) => {
    Things.find().then((things) => {
        console.log(things);
        console.log(typeof things);
        res.render('index', { things });
    }).catch((error) => {
        console.error('Error fetching data:', error);
    });
    console.log("heasdasdasdasdasdasdasdasdasdasd");
}

