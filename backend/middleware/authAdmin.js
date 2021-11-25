const UserModel = require('../models/User')

const authAdmin = async (req, res, next) =>{
    try {
        // Get user information by id
        const user = await UserModel.findOne({
            _id: req.user.id
        })
        
        if(user.role === 0){
            return res.status(400).json({msg: "Admin ressources, access denied"})
        }
        else if(user.role === 1){
        next()
        }
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authAdmin