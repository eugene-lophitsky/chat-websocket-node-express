const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res)=>{
    res.send("Пробный запуск сервера")
})

app.listen(port, ()=>{
    console.log(`приложение запущено на порту ${port}`);
})