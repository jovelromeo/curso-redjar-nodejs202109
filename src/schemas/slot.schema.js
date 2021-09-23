const itemSchema = require("./item.schema")
const Joi = require('joi');

const slotSchema = Joi.object({
    id: Joi.number().required(),
    item: itemSchema.allow(null),
    quantity: Joi.string().default(0),
    stackSize: Joi.number().min(0).max(999).default(0)
}).strict();

module.exports = slotSchema;
