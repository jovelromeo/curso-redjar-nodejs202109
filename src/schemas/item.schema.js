const Joi = require('joi');

const itemSchema = Joi.object({
    uid: Joi.string().guid({version:["uuidv4"]}),
    gid: Joi.number().required(),
    name: Joi.string().max(10).required(),
    description: Joi.string().max(20).required(),
    type: Joi.number().min(0).max(4).required(),
}).strict();

module.exports = itemSchema;
