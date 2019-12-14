const express = require("express");

const projects = require("../data/helpers/projectModel.js")

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

router.get("/:id", (req, res) => {
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

router.put("/:id", (req, res) => {
    projects.update(req.params.id, req.body)
        .then(updatedProject => {
            res.json(updatedProject)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.delete("/:id", (req, res) => {
    projects.remove(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get("/:id/actions", (req, res) => {
    projects.getProjectActions(req.params.id)
        .then(oneProject => {
            res.json(oneProject.actions)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router