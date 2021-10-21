const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60 * 1000; // 3 jours de validité pour le token
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET), {
        expiresIn: maxAge
    }
}
module.exports.signUp = async (req, res, next) =>{
    const { firstname, name, mail, password} = req.body
    console.log(req.body)
    try {
        const user = await UserModel.create({firstname, name, mail, password});
        req.status(201).json({user: user._id});

    }
    catch(err) {
        console.log(err)
        res.status(200).send({err})
    }
}

module.exports.signIn = async (req,res, next) =>{
    const {email, password } = req.body

    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly:true, maxAge})
        res.status(200).json({user: user._id})
    } catch(err){
        console.log(err)
        res.status(200).send({err})

    }
}

module.exports.logOut = async (req,res, next) =>{

}