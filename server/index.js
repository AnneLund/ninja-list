const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'mydb',
    port: '3307'
});

app.listen(3001, () => {
    console.log('listening on port 3001')
})

app.post('/create', (req, res) => {
const name = req.body.name
const id = req.body.id
const age = req.body.age
const grade = req.body.grade;


db.query(
    "INSERT INTO students (name, id, age, grade) VALUES (?,?,?,?)", 
[name, id, age, grade],
(err, result) => {
    if (err) {
        console.log(err)
    } else {
        res.send('Values Inserted Successfully');
    }
})
})