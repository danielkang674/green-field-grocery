const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groceryList');

const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
});

db.once('open', function () {
  console.log('mongoose connected successfully');
});

const itemSchema = mongoose.Schema({
  quantity: Number,
  name: String,
  itemId: Number
});

const Item = mongoose.model('Item', itemSchema);

const selectAll = function (callback) {
  Item.find({}, function (err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const addItem = (item, cb) => {
  let options = { upsert: true };
  let query = { itemId: item.itemId };
  Item.findOne(query, (err, found) => {
    if (err) {
      console.log('err', err);
      return;
    }
    if (!found) {
      console.log('not found', found);
      return;
    }
    if (found) {
      console.log('found', found);
      return;
    }
  })
}

module.exports.db = { selectAll, addItem };