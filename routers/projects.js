const express = require("express");

const Projects = ("../data/helpers/projectModel.js")

const router = express.Router()

router.get("/", (req, res) => {
    Projects.get()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
// async function getAllProjects(req, res) {
//     try {
//         const projects = await Projects.get();
//         res.json(projects);
//     } 
//     catch (error) {
//         res.status(500).json(error)
//     }
// }

module.exports = router