const { Pool }= require('pg');
const pool = new Pool ({
  user: 'postgres',
  host: 'localhost',
  database: 'likeme',
  password: '1204',
  allowExitOnIdle: true,
})


const agregarPost = async (titulo,img,descripcion) =>{
  const consulta = "INSERT INTO posts VALUES (DEFAULT,$1,$2,$3)";
  const values = [titulo,img,descripcion];
  console.log(values);
  
  const result = await pool.query(consulta,values);
  console.log('Post agregado');
}

const obtenerPost=async()=> {
  const { rows }= await pool.query("SELECT * FROM posts");
  // console.log(rows);
  return rows;
}

module.exports={agregarPost,obtenerPost}