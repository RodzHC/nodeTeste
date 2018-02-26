var mysql = require("mysql");

 function createDBConnection(){

  if (!process.env.NODE_ENV || process.env.node === 'dev'){
    return mysql.createConnection({

      host:'192.168.0.83',
      port:3306 ,
      user:'teste',
      password:'qweasdzxc',
      database:'nodeDBDev',

  });

  }

  if(process.env.NODE_ENV == 'test'){
    return mysql.createConnection({

      host:'localhost',
      port:3306 ,
      user:'teste',
      password:'qweasdzxc',
      database:'node_teste',

  });
  }

  if(process.env.NODE_ENV == 'production'){
    return mysql.createConnection({

      host:'localhost',
      port:3306 ,
      user:'rodz',
      password:'qweasdzxc',
      database:'node_teste',

  });
  }




}

module.exports = function(){return createDBConnection;}
