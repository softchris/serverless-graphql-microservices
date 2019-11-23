const express = require('express')
const app = express()
const port = 3000

const reviews = [{
    id: 1,
    title: "Oh snap, what an ending",
    description: "wow wow wow..  Josh Brolin makes this movie",
    grade: 5,
    product: 1
  },
  {
    id: 2,
    title: "Captain America, the first avenger, so good",
    description: "WW2, good bad guy, what more do you want",
    grade: 5,
    product: 2
  },
  {
    id: 3,
    title: "Captain Marvel. Mar vel, get it? :)",
    description: "She must be the most powerful Avenger or? Definitely the fastest",
    grade: 5,
    product: 3
  }
]

app.get('/', (req, res) => res.json(reviews))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))