const { itemsService } = require("../services")
const { createItem } = require("../../actividad_1/index")

const create = async (req, res) => {
    const item = createItem({
            ...req.body
    })

    const entity = await itemsService.create(item);

    res.status(201).send({
        message: "Success",
        data: entity,
    })
}

const getAll = async (req, res) => {
    const items = await itemsService.getAll()
    res.send({
        message: "Success",
        data: items.map((item) => {
            const response = { id: item._id.toString(), ...item };
            delete response._id;
            delete response.__v;
            return response;
        })
    })
}

const getOne = async (req, res) => {
    const { id } = req.params;
    const item = await itemsService.getOne(id);
    if(!item){
        res.status(404).send({
            message:"Not found"
        })
        return;
    }
    res.send({
        message: "Success",
        data: item
    })
}

const deleteItem = async (req, res) => {
    const {uid} = req.params;
    const item = await itemsService.delete(uid)
    if(!item){
        res.status(404).send({
            message:"Not found"
        })
        return;
    }
    res.send({
        message: "Success",
        data: item
    })
}

const update = async (req, res) => {
    const {id} = req.params;
    const item = await itemsService.update(id, req.body)
    if(!item){
        res.status(404).send({
            message:"Not found"
        })
        return;
    }
    res.send({
        message: "Success",
        data: item
    })
}

module.exports = {create, getAll, getOne, delete: deleteItem, update}