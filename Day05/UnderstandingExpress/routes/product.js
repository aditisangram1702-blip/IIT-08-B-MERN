const express = require("express")
const router = express.Router()


router.get("/products", (req, res) => {
    res.send("All products data")
})
router.post("/products", (req, res) => {
    res.send("Add product data")
})

router.put("/products", (req, res) => {
    res.send("Edit product data")
})

router.delete("/products", (req, res) => {
    res.send("Delete product data")
})

module.exports = router