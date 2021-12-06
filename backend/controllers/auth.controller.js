const UserModel = require('../models/User');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const userCtrl = {
    register : async(req,res,next) =>{
        try{
            const{name, mail, password} = req.body;

            const user = await UserModel.findOne({mail})
            if(user) return res.status(400).json({msg: "This email already exists."})

            if(password.length <6) return res.status(400).json({msg : "Password must be at least 6 caracters"}) 

            //Mot de passe

            const passwordHash = await argon2.hash(password, {type: argon2.argon2id})
            const newUser = new UserModel({
                name, mail, password : passwordHash
            })

            //Sauver l'utilisateur

            await newUser.save()

            //Token d'identification

            const accessToken = createAccessToken({id: newUser._id})
            const refreshtoken = createRefreshToken({id: newUser._id})
            
            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // Equivalent à 7 jours
            })

            res.json({accessToken})
            // res.json({msg: "Register Success! "})

        } catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    login : async(req,res,next) =>{
        try{
            const {mail, password} = req.body;
            

            const user = await UserModel.findOne({mail})
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const isMatch = await argon2.verify(user.password, password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

            //Si le login est bon, on créée les tokens.
            const accessToken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})
            
            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: 'api/user/refresh_token',
                maxAge: 7*24*60*60*1000 // Equivalent à 7 jours
            })

            res.json({accessToken, user})

        }catch(err) {
            return res.status(500).json({msg: err.message})
        }
    },
    logout: async(req,res,next) =>{
        try{
            res.clearCookie('refreshtoken', {path: 'api/user/refresh_token'})
            return res.json({msg: "Logged out."})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }


    },
    refreshToken: (req,res,next) =>{
        try{
            const rf_token = req.cookies.refreshtoken;
            console.log(req.cookies);
            if(!rf_token) return res.status(400).json({msg :"Please login or register"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg :"Please login or register"})

                const accesstoken = createAccessToken({id: user.id})

                res.json({user, accesstoken})

            })

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    getUser: async(req,res,next) =>{
        try{
            const user = await UserModel.findById(req.user.id).select('-password')
           if(!user) return res.status(400).json({msg: "User does not exist."})

           res.json(user)
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    
    addToCart: async(req,res,next) =>{
        try {
            const user = await UserModel.findById(req.user.id)
            console.log(user);
            if(!user) return res.status(400).json({msg: "User does not exist."})

            await UserModel.findOneAndUpdate({_id: req.user.id}, {
                cart: req.body.cart
            })
            console.log(user);
            return res.json({msg: "Added to cart"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    addPoints: async(req,res,next) =>{
        try {
            const user = await UserModel.findById(req.user.id)
            if(!user) return res.status(400).json({msg: "User does not exist."})

            await UserModel.findOneAndUpdate({_id: req.user.id}, {
                points: req.body.points
            })

            return res.json({msg: "Points added."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    verifUser: async(req,res,next) =>{
        try{
            const user = await UserModel.findById(req.user.id)
            if(!user) {return res.status(400).json({msg: "User does not exist."})}

            if (user.role === "user"){
                console.log("Role Ok");
                res.json({role: "user"})
            }
        } catch(err) {
            return res.status(500).json({msg : err.message})
        }
    
    
    
}
}


const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
}

const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCtrl