const User = require('../../../models/userRegister/userRegister');
const registerUser =  async(req,res)=>{
    const userData = req.body
    const newUser = new User(userData)

    await newUser.save()
}

module.exports = registerUser