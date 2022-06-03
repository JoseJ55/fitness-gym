const router = require("express").Router();
const files = require("./files");

router.use("/", files);

module.exports = router;