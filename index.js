const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/twitter", (req, res) => {
  res.send("KapilMotwani")
})

app.get("/login", (req, res) => {
  res.send("<h1>Kapil Motwani</h1>")
})

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code</h2>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
