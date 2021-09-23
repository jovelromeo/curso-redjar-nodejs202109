const uuidv4Regex = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

const validUUIDMiddleware = (req, res, next) => {
    const { uid } = req.params;
    if (!uid || !uid.match(uuidv4Regex)) {
        res.status(400).send({
            error: "UID should be a valid uuid v4"
        })
    } else {
        next()
    }
}

module.exports = validUUIDMiddleware