const UserModel = require('../models/User');



module.exports.signUp = async (req, res, next) =>{
    const { firstname, name, email, password} = req.body
    console.log(req.body)
    try {
        const user = await UserModel.create({firstname, name, email, password});
        req.status(201).json({user: user._id});

    }
    catch(err) {
        console.log(err)
        res.status(200).send({err})
    }
}