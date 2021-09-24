const validateEntity = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body, {abortEarly: false})
    if(error){
        res.status(400).send({
            error: error.details.map(x => x.message)
        })
        return;
    }
    req.body = value;
    next();
}

module.exports = validateEntity