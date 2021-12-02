const OffersModel = require('../models/Offers');


const offersCtrl = {
    getOffers : async(req, res, next) =>{
        try{
            const offers = await OffersModel.find()
            res.json(offers)
        } catch(err){
            return res.status(500).json({msg : err.message})
        }

    },
    getOffer : async(req, res, next) =>{
        try {
            const offer = await OffersModel.findById(req.params.id)
            res.json(offer)
        } catch(err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createOffer : async(req, res,next) =>{
        try {
            const {name, description, price} = req.body;

            const newOffer = new OffersModel({
                name, description: description.toLowerCase(), price
            })
            await newOffer.save()
            res.json({msg: "Created an offer."})
            
        } catch(err) {
            return res.status(500).json({msg : err.message})
        }
    },
    deleteOffer : async(req,res,next) =>{
        try {
            await OffersModel.findByIdAndDelete(req.params.id)
            res.json({msg : "Deleted an offer."})
        } catch(err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateOffer : async(req,res, next) =>{
        try {
            const {name, description, price} = req.body;

            await OffersModel.findOneAndUpdate({_id : req.params.id}, {
                name, description: description.toLowerCase(), price 
            })

            res.json({msg: "Updated an offer."})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    }   
}

module.exports = offersCtrl
  