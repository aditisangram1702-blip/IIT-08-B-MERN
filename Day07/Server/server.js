const express = require('express');

const userRouter = require('./routes/user')
const auth = require('./utils/auth')
const app = express();

// middlewares
app.use(express.json())
app.use(auth.authUser)
app.use('/admin', auth.authUser)
// app.use('/admin/student', adminRouter)
// app.use('/admin/courses', adminRouter)
app.use('/user', userRouter)

app.listen(4000, 'localhost', () => {
    console.log('Server is running on 4000');
});