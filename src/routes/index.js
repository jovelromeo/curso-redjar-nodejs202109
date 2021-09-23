const express = require('express');
const router = express.Router();
const itemsRoutes = require("./items.route")

router.use("/items", itemsRoutes)

module.exports = router