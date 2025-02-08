import express from "express"
import { getAll,getGenre } from "./controller.js"
const router = express.Router()

router.get("/",getAll)
router.get("/genre",getGenre)

export default router