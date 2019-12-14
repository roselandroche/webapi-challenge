const express = require("express");

const projects = require("../data/helpers/projectModel.js")
const { validateProjectID } = require("../middleware/validateProjectID")

const router = express.Router()

router.get("/", (req, res) => {
    projects.get()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get("/:id", validateProjectID(), (req, res) => {
    projects.get(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post("/", (req, res) => {
    projects.insert(req.body)
        .then(newProject => {
            res.status(201).json(newProject)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.put("/:id", validateProjectID(), (req, res) => {
    projects.update(req.params.id, req.body)
        .then(updatedProject => {
            res.json(updatedProject)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.delete("/:id", validateProjectID(), (req, res) => {
    projects.remove(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get("/:id/actions", validateProjectID(), (req, res) => {
    projects.getProjectActions(req.params.id)
        .then(projectActions => {
            res.json(projectActions)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router