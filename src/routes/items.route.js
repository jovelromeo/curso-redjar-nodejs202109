const express = require('express');
const router = express.Router();
const { validateEntityMiddleware, validUUIDMiddleware } = require('../middlewares');
const { itemsController } = require("../controllers");
const { itemSchema } = require('../schemas');

// create
router.post("/", validateEntityMiddleware(itemSchema), itemsController.create)
// getall
router.get("/", itemsController.getAll)
// getone
router.get("/:uid", /* validUUIDMiddleware,*/ itemsController.getOne)
// update
router.put("/:uid", /* validUUIDMiddleware,*/ validateEntityMiddleware(itemSchema), itemsController.update)
// delete
router.delete("/:uid", /* validUUIDMiddleware,*/ itemsController.delete)



module.exports = router