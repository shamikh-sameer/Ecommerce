const express = require('express')
const app = express()
const indexRoutes = require("./router/index.routes");

app.use("/",indexRoutes);
app.listen(3000)
