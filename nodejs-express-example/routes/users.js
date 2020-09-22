var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");


const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_COLLECTION = "user";


/* GET users listing. */
router.get('/', async function(req, res, next) {

  const users = await getUsers().catch(console.dir);

  res.send(users);
  
});

async function getUsers() {
  const client = new MongoClient(MONGO_URI);
  
  try {

    await client.connect();

    const database = client.db(MONGO_DB);
    const collection = database.collection(MONGO_COLLECTION);
    
    const query = { };
    
    const users = await collection.find(query);

    return users.toArray();

  } finally {
    await client.close();
  }


}


module.exports = router;
