const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// ...existing code...

app.get('/user', (req, res) => {
  res.send('User endpoint')
})

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
