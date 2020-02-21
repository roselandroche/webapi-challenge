const express = require("express");

const actions = require("../data/helpers/actionModel.js")

const router = express.Router()

router.get("/", (req, res) => {
    actions.get()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get("/:id", (req, res) => {
    actions.get(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post("/", (req, res) => {
    actions.insert(req.body)
        .then(newAction => {
            res.status(201).json(newAction)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.put("/:id", (req, res) => {
    actions.update(req.params.id, req.body)
        .then(updatedAction => {
            res.json(updatedAction)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.delete("/:id", (req, res) => {
    actions.remove(req.params.id)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router