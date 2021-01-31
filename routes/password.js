const router = require("express").Router();

const passwordController = require("../controller/password");

router.post("/generator", passwordController.getGeneratedPassword);
router.get("/", passwordController.getPassword);

module.exports = router;
