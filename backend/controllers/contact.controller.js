const ContactModel = require('../models/Contact')

const contactCtrl = {
    getRequests : async(req, res, next) =>{
        try {
            const requests = await ContactModel.find()
            console.log(requests)
            res.json(requests)
        } catch(err){
            return res.status(500).json({msg : err.message})
        }
    },
    createRequest : async(req, res,next) =>{
        try {
            const {mail, object, message, status, response} = req.body;

            const newProduct = new ProductModel({
                mail, object, message, status, response
            })
            await newProduct.save()
            res.json({msg: "Created a request"})
            
        } catch(err) {
            return res.status(500).json({msg : err.message})
        }
    },
    updateRequest : async(req,res, next) =>{
        try {
            const {mail, object, message, status, response} = req.body;

            await ProductModel.findOneAndUpdate({_id : req.params.id}, {
                mail, object, message, status, response
            })

            res.json({msg: "Updated a request"})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = contactCtrl
  