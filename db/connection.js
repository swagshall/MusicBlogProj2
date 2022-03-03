const mysql = require('mysql')


const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Chemdas.1',
  database: 'musicBlog'
})