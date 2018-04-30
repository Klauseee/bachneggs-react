const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Concert = require('../models/concert');
const concertData = require('./data/concerts');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bach-database', (err, db) => {
  db.dropDatabase();

  Concert.create(concertData)
    .then(concerts => {
      console.log(`${concerts.length} concerts created`);
    })
    .catch(console.log(err))
    .finally(() => mongoose.connection.close());

});
