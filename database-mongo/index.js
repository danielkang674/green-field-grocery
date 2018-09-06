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
  itemId: Number,
  price: Number
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
  let query = { itemId: item.itemId };
  Item.findOne(query, (err, found) => {
    if (err) {
      console.log('err', err);
      return cb(err, null);
    }
    if (!found) {
      let shoppingItem = new Item({ quantity: 1, name: item.name, itemId: item.itemId, price: item.salePrice });
      shoppingItem.save(err => {
        if (err) console.log(err);
        return cb(err, null);
      });
      return cb(null);
    }
    if (found) {
      let newQuantity = found.quantity + 1;
      Item.updateOne(query, { quantity: newQuantity }, (err, raw) => {
        if (err) {
          console.log(err);
          return cb(err, null);
        } else {
          return cb(null);
        }
      })
    }
  })
};

const removeItem = (itemId, cb) => {
  let query = { itemId: itemId };
  Item.findOne(query, (err, found) => {
    if (err) {
      console.log(err);
      return cb(err, null);
    }
    if (!found) {
      console.log('Not found in db');
      return cb('Not found in db', null);
    }
    if (found) {
      Item.deleteOne(query, (err, result) => {
        if (err) {
          console.log(err);
          return cb(err, null);
        } else {
          return cb(null, result);
        }
      })
    }
  })
};

module.exports.db = { selectAll, addItem, removeItem };