const items = [];

// llamada a repository de db para crear una entidad item
const create = (item) => {
    items.push(item);
    return item;
}

const getAll = () => {
    return items;
}

const getOne = (uid) => {
    const item = items.find(item => item.uid === uid);
    return item;
}

const deleteInternal = (uid) => {
    const item = getOne(uid)
    if (item){
        const itemIndex = items.indexOf(item)
        if (itemIndex !== -1) {
            items.splice(itemIndex, 1)
        }
    }
    return item
}

const update = (uid, data) => {
    const item = getOne(uid);
    if(item){
        item.gid = data.gid
        item.description = data.description
        item.name = data.name
        item.type = data.type
    }
    return item
}

module.exports = {
    create,
    getAll,
    getOne,
    delete: deleteInternal,
    update
}