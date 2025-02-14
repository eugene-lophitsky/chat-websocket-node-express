import express from "express";
const router = express.Router();
import aboutRouter from "./routes/aboutRouter.js";

const app = express();
const port = 3030;

app.set("view engine", "ejs");

app.use("/about", aboutRouter)

app.listen(port, ()=>{
    console.log(`приложение запущено на порту ${port}`);
})




export default app;