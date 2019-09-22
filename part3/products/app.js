const express = require('express')
const app = express()
const port = 3000

const products = [{
  id: 1,
  name: "Avengers - endgame"
},
{
  id: 2,
  name: "Captain America"
},
{
  id: 3,
  name: "Captain Marvel"
}]

app.get('/', (req, res) => res.json(products))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))