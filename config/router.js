const router = require('express').Router();
const concerts = require('../controllers/concerts');

router.route('/concerts')
  .get(concerts.index);

module.exports = router;
