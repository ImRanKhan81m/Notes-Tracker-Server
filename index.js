
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();

/* ${process.env.DB_USER}
${process.env.DB_PASS} */

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://NotesTracker:tFlGkk5ushNsMPLs@cluster0.xnxtp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const notesCollection = client.db("notesTracker").collection("notes");

        // get  Api to read all notes
        // localhost:5000/notes

        app.get('/notes', async (req, res) => {
            const query = req.query;
            console.log(query);

            const cursor = notesCollection.find(query);
            const result = await cursor.toArray()

            res.send(result)
        })

        // create notesTracker
        // localhost:5000/note
        /*
         "username": "imran", 
        "textdata": "hello world"
        */

        app.post('/note', async (req, res) => {
            const data = req.body;
            console.log(data);

            const result = await notesCollection.insertOne(data)

            res.send(result)
        })


        // update notesTracker

        app.put('/note/:id', (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) };

            // console.log('from put method', id);
            res.send()
        })






        // Delete notesTracker
        console.log('connected to database');
    }
    finally {

    }
}
run().catch(console.dir)

/* client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object

    console.log('connect to db');
    //   client.close();
}); */







app.get('/', (req, res) => {
    res.send('Running my code CRUD SERVER')
});
app.listen(port, () => {
    console.log('crud server is running ');
})
































// NotesTracker
// tFlGkk5ushNsMPLs