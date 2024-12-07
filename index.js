const {agregarPost, obtenerPost}= require('./consultas')
const express = require('express');
const app = express ();
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./index.html")
  })

app.get('/posts',async (req,res)=>{
  const posts = await obtenerPost();
  res.json(posts);
})

app.post('/posts',async (req,res)=>{
  const {titulo,img,descripcion} = req.body;
  await agregarPost(titulo,img,descripcion);
  res.send('Post agregado con exito');
})




app.listen(3000, console.log('Servidor encendido'));