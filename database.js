const {
  createPool
} = require('mysql')
 const pool = createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "agecare",
  connectionLimit:10
 })

 pool.query('select * from nurse', (err,res,fields)=>{
  if(err){
    return console.log(err);
  }
  return console.log(res)
 })