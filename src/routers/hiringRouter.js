const router = require("express").Router();
const hiringController = require("../controllers/hiringController");

router.post("/", hiringController.makePost);

module.exports = router;
