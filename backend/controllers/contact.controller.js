const ContactModel = require('../models/Contact')
const creds = require('../mail/MailData');
const transport = require('../mail/Config');

const contactCtrl = {
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
            console.log(err.message);
            return res.status(500).json({msg : err.message});
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
    getRequest : async(req, res, next) =>{
        try {
            const request = await ContactModel.findOne({_id : req.params.id})
            console.log(request);
            res.json(request);
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
    sendMail : async(req, res, next) => {
        const {mail, subject, message, response} = req.body;

        let content = `Name: Bangoo \n Email: ${mail} \n Subject of your request: ${subject} \n Your message to us: ${message} \n Our response: ${response}`;

        const mailContent = {
            from: creds.USER,
            to: mail,  //Change to email address that you want to receive messages on
            subject: 'Response to your contact request',
            text: content
        }

        transport.transporter.sendMail(mailContent, (err, data) => {
            if (err) {
              res.json({
                msg: 'fail'
              })
            } else {
              res.json({
                msg: 'success'
              })
            }
          })
    }
}

module.exports = contactCtrl
  