const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'clover',
  password: '0000',
  database: 'lucky'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL에 연결되었습니다.');
});

function addLetter(name, message) {
  const query = `INSERT INTO letters (name, message) VALUES ('${name}', '${message}')`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log('편지가 저장되었습니다.');
  });
}

function showLetters() {
  const query = 'SELECT * FROM letters';
  connection.query(query, (err, rows) => {
    if (err) throw err;
    console.log('저장된 편지 목록:');
    rows.forEach((row, index) => {
      console.log(`편지 ${index + 1}:`);
      console.log(`제목: ${row.name}`);
      console.log(`내용: ${row.message}`);
      console.log('------------------');
    });
  });
}

function getUserInput() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('제목:', (name) => {
    rl.question('편지 내용:', (message) => {
      addLetter(name, message);
      rl.close();
    });
  });
}

getUserInput();

showLetters();

connection.end();

  