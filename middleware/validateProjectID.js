const projects = require("../data/helpers/projectModel")

function validateProjectID() {
    return (req, res, next) => {
        projects.get(req.params.id)
            .then(project => {
                if(project) {
                    req.project = project
                    next()
                } else {
                    res.status(400).json({ message: `Project does not exist.`})
                }
            })
            .catch(error => {
                res.status(500).json(error)
            })
    }
}

module.exports = {
    validateProjectID
}