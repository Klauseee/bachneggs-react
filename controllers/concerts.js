const Concert = require('../models/concert');

function indexRoute(req, res, next) {
  Concert.find()
    .then(concerts => res.json(concerts))
    .catch(next);
}

module.exports = {
  index: indexRoute
};
