const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const db = require("./app/models")

db.sequelize.sync()
// db.sequelize.sync({ force: true })

require('./app/routes/authRoutes')(app)
require('./app/routes/projectRoutes')(app)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Backend server is online on port ${PORT}.`)
})