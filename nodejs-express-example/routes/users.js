var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");


const mongoUri = process.env.MONGO_URI;
const mongoDb = process.env.MONGO_DB;



/* GET users listing. */
router.get('/', async function(req, res, next) {

  
  const users = await getUsers().catch(console.dir);

  res.send(users);

  
});

async function getUsers() {
  const client = new MongoClient(uri);
  
  try {
    

    await client.connect();

    const database = client.db("test"); //FIXME
    const collection = database.collection("user"); //FIXME
    
    const query = { };
    
    const users = await collection.find(query);

    const usersDto = [];

    // since this method returns the matched document, not a cursor, print it directly
    
    await users.forEach(function(u){
      usersDto.push(u);
    });

    return usersDto;

  } finally {
    await client.close();
  }


}


module.exports = router;
