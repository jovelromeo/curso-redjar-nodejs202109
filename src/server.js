require('dotenv').config();

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/", require("./routes"))

// not found middleware
app.use((req, res)=>{
    res.status(404).send({message: "Not found"})
})

// error middleware
app.use((err, req, res, next)=>{
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).send({message: "Internal server error"})
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
