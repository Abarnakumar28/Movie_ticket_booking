

const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require("mongodb")

const connectionURL = 'mongodb://localhost:27017'
const databaseName = 'bookShow'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
mongoose.connect("mongodb://localhost:3000/posts", { useNewUrlParser: true, useCreateIndex: true });
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id: id,
        fname: 'ab',
        lname: 'k',
        email: 'abar@gmail.com',
        password: '1'
    }, (error,result) => {
            if (error) {
              return console.log('Unable to insert user')
            }  
            console.log(result.ops)
    })
})