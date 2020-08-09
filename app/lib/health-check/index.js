const router = require("express").Router()

module.exports = router.get("/", ({ res }) => {
    return res.status(200)
        .json({ message: "Mockable API v1 is running" })
});
