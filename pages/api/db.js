//code du manual vercel


// Import Dependencies

const url = require('url')
const MongoClient = require('mongodb').MongoClient



// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, {  useUnifiedTopology: true })
    console.log("connecting to ", uri);

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}


// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  // using the connection string environment variable as the argument
  const db = await connectToDatabase(process.env.MONGODB_URI)
console.log("process.env.mongodb.uri ", process.env.MONGODB_URI)
  // Select the "contact" collection from the database
 const collection = await db.collection('contacts')
console.log("heard from collection contacts")
  // Select the contact collection from the database
  const contacts = await collection.find({}).toArray()
   // console.log("my contacts: ",contacts);  
  
   console.log("array of contacts", contacts);
 
  // Respond with a JSON string of all contact in the collection
  res.status(200).json({ contacts })
}
