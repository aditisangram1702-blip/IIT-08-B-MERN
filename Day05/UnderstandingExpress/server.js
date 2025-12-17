const express = require("express")
const userRouter = require("./routes/user")
const productRouter = require("./routes/product")
const orderRouter = require("./routes/orders")

// object of the express
const app = express()

// middleware
app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/orders", orderRouter)

app.listen(4000, 'localhost', () => {
    console.log("Server started at port 4000")
})