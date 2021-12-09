const router = require('express').Router();
const contactController = require('../controllers/contact.controller');



router.route('/')
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
=======
      .get(contactController.getRequests)
>>>>>>> Avancement contact user front + back mais pas fini
=======
>>>>>>> Contact user fini + contact admin get ok, reste a terminer le reste
      .post(contactController.createRequest)

router.route('/:id')
      .put(contactController.updateRequest)

<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
<<<<<<< refs/remotes/origin/develop
router.route('/status/:id')
      .put(contactController.updateStatusRequest)

=======
>>>>>>> Contact user fini + contact admin get ok, reste a terminer le reste
=======
router.route('/status/:id')
      .put(contactController.updateStatusRequest)

>>>>>>> Put request pour changer le status ok
router.route('/open')
      .get(contactController.getOpenRequests)

router.route('/closed')
      .get(contactController.getClosedRequests)

<<<<<<< refs/remotes/origin/develop
=======
>>>>>>> Avancement contact user front + back mais pas fini
=======
>>>>>>> Contact user fini + contact admin get ok, reste a terminer le reste
module.exports = router;
