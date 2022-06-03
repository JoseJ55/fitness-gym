const router = require("express").Router();

const home = require("./home");
const cart = require("./cart");
const profile = require("./profile");
const shop = require("./shop");
const trainers = require("./trainers");

router.use("/", home);
router.use("/trainers", trainers);
router.use("/shop", shop);
// router.use("/cart", cart);
// router.use("/profile", profile);

module.exports = router;