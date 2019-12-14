const express = require("express")

const server = express()

server.use(express.json())

server.listen(3000, () => {
    console.log(`\n*** Server listening on Port: 3000 ***\n`)
})