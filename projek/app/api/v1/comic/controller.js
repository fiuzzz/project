import { comics,genre } from "./model.js"
const getAll = (req, res) => {
    res.render("template/index", {comics,genre})
}



export {
    getAll
}