const express = require("express")
const pool = require("../db/pool")
const result = require("../utils/result")

const router = express.Router()

router.get("/", (req, res) => {
    const sql = `SELECT * FROM students`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.post("/", (request, response) => {
    // Destructing
    const { name, email, course } = request.body
    const sql = `INSERT INTO students(name,email,course) VALUES(?,?,?)`
    pool.query(sql, [name, email, course], (error, data) => {
        response.send(result.createResult(error, data))
    })

})

router.put()
router.delete()

module.exports = router