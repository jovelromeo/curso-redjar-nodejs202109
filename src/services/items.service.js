const ItemRepository = require("../repositories/item.repository");

const items = [];

// llamada a repository de db para crear una entidad item
const create = async (item) => {
    const dbItem = await ItemRepository.save(item);
    const response = { id: dbItem._id.toString(), ...dbItem._doc };
    delete response._id;
    delete response.__v;
    return response;
}

const getAll = async () => {
    const items = await ItemRepository.findAll();
    return items;
}

const getOne = async (id) => {
    const item = await ItemRepository.findById(id);
    return item;
}

const deleteInternal = async (id) => {
   const item = await ItemRepository.delete(id);
    return item
}

const update = async (id, data) => {
    const item = await ItemRepository.update(id, data);
    return item;
}

module.exports = {
    create,
    getAll,
    getOne,
    delete: deleteInternal,
    update
}