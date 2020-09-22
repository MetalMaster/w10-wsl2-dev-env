var express = require('express');
var router = express.Router();

//Get MongoClient
const { MongoClient } = require("mongodb");

//Get connection variables
const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB = process.env.MONGO_DB;
const MONGO_COLLECTION = "user";


/* GET users listing. */
router.get('/', async function(req, res, next) {

  const users = await getUsers().catch(console.dir);

  res.send(users);
  
});

/* GET user detail. */
router.get('/:id', async function(req, res, next) {

  const user = await getUser(req.params.id).catch(console.dir);

  res.send(user);
  
});

/**
 * Get the list of users
 */
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

/**
 * Get a user by id
 * @param {string} id The internal user id 
 */
async function getUser(id) {
  const client = new MongoClient(MONGO_URI);
  
  try {

    await client.connect();

    const database = client.db(MONGO_DB);
    const collection = database.collection(MONGO_COLLECTION);
    
    const query = { "_id":id };
    
    const user = await collection.findOne(query);

    return user;

  } finally {
    await client.close();
  }
}


module.exports = router;
