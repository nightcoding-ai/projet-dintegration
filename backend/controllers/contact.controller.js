const ContactModel = require('../models/Contact')

const contactCtrl = {
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
        }catch(err){
            return res.status(500).json({msg : err.message})
        }
    },
    getRequests : async(req, res, next) =>{
        try {
            const requests = await ContactModel.find()
        } catch(err){
            return res.status(500).json({msg : err.message})
        }
    },

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
            console.log(requests)
            res.json(requests)
        } catch(err){
            return res.status(500).json({msg : err.message})
        }
    },
    createRequest : async(req, res,next) =>{
        try {
            const {mail, subject, message, status, response} = req.body;

            const newRequest = new ContactModel({
                mail, subject, message, status, response
            })
            await newRequest.save()
            res.json({msg: "Created a request"})
            
        } catch(err) {
            return res.status(500).json({msg : err.message})
        }
    },
    updateRequest : async(req,res, next) =>{
        try {
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
            })

            res.json({msg: "Updated a request"})
        }catch(err){
            console.log(err);
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = contactCtrl
  