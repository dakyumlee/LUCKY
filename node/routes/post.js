var express = require('express');
var router = express.Router();
const pool = require("../db/db");

var express = require('express');
const { createPool } = require("mysql2");
var router = express.Router();


router.get('/', async(req, res, next) =>{
 const post = await pool.query("select * FROM lucky");
 console.log(post);

});

module.exports = router;