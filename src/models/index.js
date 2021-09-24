const mongoose = require('../connections/mongoose.connection');
const itemSchema = require('./items.model');

const Item = mongoose.model('Item', itemSchema);

module.exports = {
  Item,
}
