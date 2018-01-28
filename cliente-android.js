var http = require ('http');
var configuracoes = {

  hstname:'localhost',
  port:3000,
  path:'/produtos',
  headers:{'Accept': 'application/json'}

      // Normalmente "text/html"

}


http.get (configuracoes, function(res){

  res.on ('data', function(body){

    console.log('Corpo:'+body) ;

  }) ;

});
