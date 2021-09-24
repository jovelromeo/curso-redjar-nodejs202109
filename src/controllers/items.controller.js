const { itemsService } = require("../services")
const { createItem } = require("../../actividad_1/index")

const create = (req, res) => {
    const item = createItem({
            ...req.body
    })
    const entity = itemsService.create(item);
    res.status(201).send({
        message: "Success",
        data: entity,
    })
}

const getAll = (req, res) => {
    const items = itemsService.getAll()
    res.send({
        message: "Success",
        data: items
    })
}

const getOne = (req, res) => {
    const {uid} = req.params;
    const item = itemsService.getOne(uid)
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

const deleteItem = (req, res) => {
    const {uid} = req.params;
    const item = itemsService.delete(uid)
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

const update = (req, res) => {
    const {uid} = req.params;
    const item = itemsService.update(uid, req.body)
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