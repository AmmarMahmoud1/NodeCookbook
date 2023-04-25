const express = require('express')
const app = express()
const port = 5000;
const data = require ("./data.json");
const cors = require ("cors");

app.use(cors());





app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/blogPosts', (req, res) => {
    res.send(data);
    console.log(data);
  });

  app.get('/blogPosts/:id', (req, res) => {
    
    const id = req.params.id;
    
    res.send(`Hello blogPosts ID! ${id}`)
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})