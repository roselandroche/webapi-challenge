const express = require("express")
const projectsRouter = require("./routers/projects")

const server = express()

server.use(express.json())
server.use("/projects", projectsRouter)

server.listen(3000, () => {
    console.log(`\n*** Server listening on Port: 3000 ***\n`)
})