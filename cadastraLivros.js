var http = require ('http');
var configuracoes = {

  hstname:'localhost',
  port:3000,
  path:'/produtos',
  method:'post',

  headers:{

    'Accept': 'application/json',
    'Content-type':'application/json'
}

      // Normalmente "text/html"

}


var client = http.request (configuracoes, function(res){

  res.on ('data', function(body){

    console.log('Corpo:'+body) ;

  }) ;

});

var produto = {

  titulo:"",
  descricao : "node javascript",
  preco: 100

};

client.end (JSON.stringify(produto));
