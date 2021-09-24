const { Item } = require("../models");

const ItemRepository = {
  save: (item) => {
    return Item.create(item);
  },
  findAll: (filters) => {
    return Item.find(filters).lean();
  },
  update: (id, values) => {
    return Item.updateOne({ _id: id }, values);
  },
  delete: (id) => {
    return Item.findByIdAndDelete(id);
  },
  findById: (id) => {
    return Item.findById(id).lean();
  },
}

module.exports = ItemRepository;
