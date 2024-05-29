const express = require('express');
const app = express();
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

//connection mongodb
mongoose.connect('mongodb+srv://wwe1102:1908p1908@cluster0.lohchlt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser : true 
})

//Controllers
const indexControllers = require('./controllers/indexControllers')
const loginControllers = require('./controllers/loginControllers')
const registerControllers = require('./controllers/registerControllers')
const StoreControllers = require('./controllers/StoreControllers')


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
    secret: "node scret"
}))
app.set('view engine','ejs')

app.get('/',indexControllers)
app.get('/login',loginControllers)
app.get('/register',registerControllers)
app.post('/User/register',StoreControllers)


app.listen(4000,() =>{
    console.log("App Listening on port 4000")
})