
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();









app.get('/', (req, res)=>{
    res.send('Running my code CRUD SERVER')
});
app.listen(port, () => {
    console.log('crud server is running ');
})
































// NotesTracker
// tFlGkk5ushNsMPLs