//CRUD Create Read Update Delete

const mongodb= require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb+srv://anuzza:anuja@cluster0.nv5zq7l.mongodb.net/?retryWrites=true&w=majority'
const databaseName='task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, ()=>{
    
})

