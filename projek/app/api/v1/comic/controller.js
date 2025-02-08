import { comics,genre } from "./model.js"
const getAll = (req, res) => {
    res.render("comics/index", {comics})
}

const getGenre = (req,res) => {
    res.render('comics/genre', {genre})
}



export {
    getAll,
    getGenre
}