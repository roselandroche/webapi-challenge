const express = require("express")
const morgan = require("morgan")

const projectsRouter = require("./routers/projects")
const actionsRouter = require("./routers/actions")

const server = express()

server.use(express.json())
server.use(morgan())
server.use("/projects", projectsRouter)
server.use("/actions", actionsRouter)

server.listen(3000, () => {
    console.log(`\n*** Server listening on Port: 3000 ***\n`)
})