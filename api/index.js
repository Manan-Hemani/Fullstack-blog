import express from 'express';
import { createConnection } from 'mysql';

const app = express()

const db = createConnection({
    host:"localhost",
    user:"root",
    password:"manan123",
    database:"test"
})
app.use(express.json());

app.listen(8000,() => {
    console.log("Listening on port 8000!");
})