var mysql = require("mysql");

 function createDBConnection(){

  return mysql.createConnection({

    host:'192.168.0.83',
    port:3306 ,
    user:'teste',
    password:'teste',
    database:'teste',
});

}

module.exports = function(){return createDBConnection;}
