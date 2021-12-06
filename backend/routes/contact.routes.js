const router = require('express').Router();
const contactController = require('../controllers/contact.controller');



router.route('/')
      .get(contactController.getRequests)
      .post(contactController.createRequest)

router.route('/:id')
      .put(contactController.updateRequest)

module.exports = router;
