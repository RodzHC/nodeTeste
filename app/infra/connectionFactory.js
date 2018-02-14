var mysql = require("mysql");

 function createDBConnection(){

  if (!process.env.NODE_ENV || process.env.node === 'dev'){
    return mysql.createConnection({

      host:'localhost',
      port:3306 ,
      user:'root',
      password:'Pokemon_377',
      database:'node_dev',

  });

  }

  if(process.env.NODE_ENV == 'test'){
    return mysql.createConnection({

      host:'localhost',
      port:3306 ,
      user:'root',
      password:'Pokemon_377',
      database:'node_teste',

  });
  }



}

module.exports = function(){return createDBConnection;}
