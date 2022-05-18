//Express tillader at køre Node og React på samme port.
const express = require('express');
const app = express();

const mysql = require('mysql');

//CORS tillader requests til andre origins. Uden CORS, bruger browseren en SOP (Same-origin-policy),
//som blokerer alle requests til andre origins.
const cors = require('cors');

app.use(cors());
app.use(express.json());

//Jeg etablerer forbindelse til min sql-database.
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'mydb',
    port: '3307'
});

//Jeg etablerer forbindelse til express serveren.
app.listen(3001, () => {
    console.log('listening on port 3001')
})

//Jeg poster min nye student på min database via min app.
app.post('/create', (req, res) => {
const firstname = req.body.Firstname
const lastname = req.body.Lastname
const email = req.body.Email;

db.query(
    "INSERT INTO users (Firstname, Lastname, Email) VALUES (?,?,?)", 
[firstname, lastname, email],
(err, result) => {
    if (err) {
        console.log(err)
    } else {
        res.send('Values Inserted Successfully');
    }
})
})

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if(err) {
        console.log(err)
    } else {
        res.send(result);
    }} 
    )
})