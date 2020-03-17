const server = require('./api/server');

const port = process.env.PORT || 4444;

server.listen(port, ()=>{
  console.log(`\n** Api is running on port ${port} **\n`)  
});