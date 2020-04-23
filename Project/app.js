const express = require('express')
const app = express();

// get the user Router for login and signin
const userRouter = require('./routes/userRouter');

app.set("view_engine", "ejs")

// GET home page
app.get('/', (req, res) => {
    res.send("<H1>Sheltero Homepage</H1>")
})

app.use('/', userRouter)


app.listen(3000, () => {
    console.log('Sheltero is listening on port 3000!')
});