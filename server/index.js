const express = require('express')
const ctrl = require("./controller")
const { addRoster } = require('./controller')
const app = express()

const port = 3009

app.use(express.json())

app.get("/api/roster", ctrl.getRoster)
app.post("/api/roster", ctrl.addRoster)
app.put("/api/roster/:id", ctrl.editImage)
app.delete("/api/roster", ctrl.deletePlayer)
app.get("/api/search", ctrl.getPlayer)

app.listen(port, () =>
    console.log(`Server listening on port ${port}`))
