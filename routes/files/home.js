const router = require("express").Router();
const path = require("path");

router.get("/", async(req, res) => {
    try {
        res.render("home");
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;