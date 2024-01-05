const mongoose = require('mongoose') 
const dotenv = require ('dotenv')
dotenv.config()
mongoose.connect(process.env.URL)

const registerSchema = new mongoose.Schema({
    email: String,
    userName: String,
    password: String
})
const register = mongoose.model('Register', registerSchema)

module.exports={
    register
}