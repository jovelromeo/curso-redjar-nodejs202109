const {createItem} = require("../actividad_1/index")
const express = require('express')
const app = express()

const PORT = 3000

app.use(express.json())

// POST
// GET
// PUT/PATCH
// DELETE
const uuidv4Regex = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

const items = []

// create item
app.post('/items', (req, res) => {
  const item = createItem({
      ...req.body
  })
  items.push(item);
  res.status(201).send({
      message: "Success",
      data: item,
       // meta: null,
  })
})

// get all items
app.get('/items', (req, res) => {
    res.send({
        message: "Success",
        data: items
    })
})

// get one
app.get('/items/:uid', (req, res) => {
   const {uid} = req.params;
   if(!uid.match(uuidv4Regex)){
       res.status(400).send({
           error: "UID should be a valid uuid v4"
       })
       return;
   }
   const item = items.find(item => item.uid === uid )
   if(!item){
        res.status(404).send({
            message: "Item not found"
        })
        return;
   }
   res.send({
       message: "Success",
       data: item
   })
})

app.delete('/items/:uid', (req,res)=>{
    res.send({})
})

app.put('/items/:uid', (req,res)=>{
    res.send({})
})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})