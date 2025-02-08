import express from "express";
import routerComic from "./api/v1/comic/route.js";
import expressEjsLayouts from "express-ejs-layouts"
import path from "path";
import { fileURLToPath } from "url"
const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.set("view engine", "ejs")

app.use(expressEjsLayouts)
// app.set("layout", "./template/index")

app.use(express.static(path.join(__dirname, "/public")))

app.use("/comics",routerComic)
app.set("layout", "template/index");

let port = 3603
app.listen(port,()=>{
    console.log(`Server is running to http://localhost:${port}`);
    
})