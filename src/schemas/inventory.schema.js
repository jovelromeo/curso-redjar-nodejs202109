const itemSchema = require("./item.schema")
const slotSchema = require("./slot.schema")

const Joi = require('joi');

const inventorySchema = Joi.object({
    slots: Joi.array().items(slotSchema),
    items: Joi.array().items(itemSchema),
}).strict();

module.exports = inventorySchema;
