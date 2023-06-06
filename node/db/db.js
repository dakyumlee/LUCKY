const mysql = require('mysql2');  // mysql 모듈 로드
const pool = mysql.createPool({   
  host : "localhost",
  user : "clover",
  password : "0000",
  database :"lucky"
});

module.exports;