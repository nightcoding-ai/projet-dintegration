const UserModel = require('../models/User');
const OfferModel = require('../models/Offers');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const userCtrl = {
    register : async(req,res,next) =>{
        try{
            const{name, mail, password} = req.body;

            const userMail = await UserModel.findOne({mail})
            if(userMail) return res.status(400).json({msg: "Cet email est déjà pris."})
            const userName = await UserModel.findOne({name})
            if(userName) return res.status(400).json({msg: "Ce nom d'utilisateur existe déjà."})

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
            req.session.userToken ? req.session.userToken : {}
            req.session.user ? req.session.user : {}
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
            req.session.userToken = accessToken
            req.session.user = user
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
    delUser: async(req,res,next) =>{
        try{
            console.log( "Votre id : " + req.user.id);
            const user = await UserModel.findByIdAndDelete(req.session.user._id);
            
            if(!user) return res.statuts(400).json({msg :  "User does not exist."})
            req.session.destroy()
            return res.status(200).json({msg : "Account deleted"})

        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    getAllUser : async(req,res,next) =>{
        try{
            const users = await UserModel.find().select('-password')
            res.json(users)

        }catch(err){
            return res.statuts(500).json({msg:"Error 500 occured."})
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
    },
    infos: async(req,res,next) =>{
        try{
            let user = req.session.user
            return res.json(user)
        } catch(err) {
            return res.status(500).json({msg : err.message})
        }
    },
    removeCurrentUser: async(req,res,next) =>{
        try{
            console.log(req.session.user)
            delete req.session.user; 
            delete req.session.userToken
            return res.json({msg:"utilisateur déconnecté"})

        } catch(err) {
            return res.status(500).json({msg : err.message});
        }
    },
    addOfferToUser: async(req,res,next) =>{
        try{
            user = await UserModel.findById(req.user.id)
            console.log( "Le user : " + user)
            offer = await OfferModel.findById(req.params.id)
            console.log( "L'offre : " + offer)


            if(!user) return res.status(400).json({msg : "User does not exist."})
            if(!offer) return res.status(400).json({msg :"Offer does not exist."})

            if(user.points >= offer.price){
                await UserModel.findOneAndUpdate({_id: req.user.id}, {
                    $push: {userOffers : {name : offer.name, description: offer.description}},
                    points: (user.points - offer.price)
                
                })

                return res.json({msg : "OK", points : user.points})
            }
            else{
                return res.json({msg : "ERROR"})
            }

            

        }
        catch(err) {
            return res.status(500).json({msg : err.message});
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