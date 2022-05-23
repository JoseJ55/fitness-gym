const router = require("express").Router();
const path = require("path");

router.get("/", async(req, res) => {
    try {
        res.render("home");
        // res.sendFile(path.join(__dirname, "/../public/html/index.html"))
        // res.sendFile(path.join(__dirname, "../../public/html/index.html"))
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;