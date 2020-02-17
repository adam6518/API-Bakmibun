var mysql = require('mysql');

const db = mysql.createConnection({
    user: 'root',
    password: 'adam1234',
    database: 'project1',
    host: 'localhost'
})

module.exports = db