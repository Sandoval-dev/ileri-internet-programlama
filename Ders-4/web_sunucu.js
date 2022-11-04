const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('Merhaba Dünya')
  })

app.get('/ajax', (req, res) => {
  res.send('<h1>AJAX</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})