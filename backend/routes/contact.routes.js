const router = require('express').Router();
const contactController = require('../controllers/contact.controller');



router.route('/')
<<<<<<< refs/remotes/origin/develop
=======
      .get(contactController.getRequests)
>>>>>>> Avancement contact user front + back mais pas fini
      .post(contactController.createRequest)

router.route('/:id')
      .put(contactController.updateRequest)

<<<<<<< refs/remotes/origin/develop
router.route('/status/:id')
      .put(contactController.updateStatusRequest)

router.route('/open')
      .get(contactController.getOpenRequests)

router.route('/closed')
      .get(contactController.getClosedRequests)

=======
>>>>>>> Avancement contact user front + back mais pas fini
module.exports = router;
