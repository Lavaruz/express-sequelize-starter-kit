const router = require("express").Router();
const companyController = require("../controllers/companyController");

router.get("/", companyController.getAllCompany);
router.get("/:id", companyController.getCompanyById);

module.exports = router;
