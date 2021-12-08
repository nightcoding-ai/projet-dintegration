const UserModel = require('../models/User');

const authShop = async (req,res,next) => {
    try{
        const user = await UserModel.findOne({
            _id : req.user.id
        })

        if(user.role === "user" || user.role === "admin"){
            return res.status(400).json({msg: "Not authorized." })
        }
        else if(user.role === "seller"){

            next()
        }
    }
    catch(err){
            return res.status(500).json({msg: err.msg})

    }
}

module.exports = authShop
