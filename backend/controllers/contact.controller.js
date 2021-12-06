const ContactModel = require('../models/Contact')

const contactCtrl = {
<<<<<<< refs/remotes/origin/develop
    getOpenRequests : async(req, res, next) =>{
        try {
            const requests = await ContactModel.find({status: true})
            console.log(requests)
            res.json(requests)
        } catch(err){
            return res.status(500).json({msg : err.message})
        }
    },
    getClosedRequests : async(req, res, next) =>{
        try {
            const requests = await ContactModel.find({status: false})
=======
    getRequests : async(req, res, next) =>{
        try {
            const requests = await ContactModel.find()
>>>>>>> Avancement contact user front + back mais pas fini
            console.log(requests)
            res.json(requests)
        } catch(err){
            return res.status(500).json({msg : err.message})
        }
    },
    createRequest : async(req, res,next) =>{
        try {
<<<<<<< refs/remotes/origin/develop
            const {mail, subject, message, status, response} = req.body;

            const newRequest = new ContactModel({
                mail, subject, message, status, response
            })
            await newRequest.save()
=======
            const {mail, object, message, status, response} = req.body;

            const newProduct = new ProductModel({
                mail, object, message, status, response
            })
            await newProduct.save()
>>>>>>> Avancement contact user front + back mais pas fini
            res.json({msg: "Created a request"})
            
        } catch(err) {
            return res.status(500).json({msg : err.message})
        }
    },
    updateRequest : async(req,res, next) =>{
        try {
<<<<<<< refs/remotes/origin/develop
            const {mail, subject, message, status, response} = req.body;

            await ContactModel.findOneAndUpdate({_id : req.params.id}, {
                mail, subject, message, status, response
            })

            res.json({msg: "Updated a request"})
        }catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateStatusRequest : async(req,res, next) =>{
        try {
            const {status} = req.body;

            await ContactModel.findOneAndUpdate({_id : req.params.id}, {
                status: status
=======
            const {mail, object, message, status, response} = req.body;

            await ProductModel.findOneAndUpdate({_id : req.params.id}, {
                mail, object, message, status, response
>>>>>>> Avancement contact user front + back mais pas fini
            })

            res.json({msg: "Updated a request"})
        }catch(err){
<<<<<<< refs/remotes/origin/develop
            console.log(err);
=======
>>>>>>> Avancement contact user front + back mais pas fini
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = contactCtrl
  