


module.exports = function(app){





	app.get("/produtos",function(req, res) {

	        var connection = app.infra.connectionFactory();
	        var ProdutosDAO = new app.infra.ProdutosDAO(connection);

	        ProdutosDAO.lista(function(err, results){

	              res.format({
	                html: function(){
	                    res.render("lista",{lista:results});
	                },
	                json: function(){
	                    res.json(results);
	                }
	            });

	        });

	        connection.end();

	    });



			app.get("/produtos",function(req, res) {

							var connection = app.infra.connectionFactory();
							var ProdutosDAO = new app.infra.ProdutosDAO(connection);

							ProdutosDAO.lista(function(err, results){

										res.format({

											html: function(){
													res.render("lista",{lista:results});
											},
											json: function(){
													res.json(results);
											}
									});

							});

							connection.end();

					});


	app.post('/produtos', function(req,res){

				var produto = req.body;
        console.log(produto);



        req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();


        var errors = req.validationErrors();

        if(errors){
            res.render('form', {errosValidacao:errors});
            return;
        }

				var connection = app.infra.connectionFactory();
				var produtosDao = new app.infra.ProdutosDao(connection);

				produtosDAO.salva(produto, function(erro,results){ res.redirect("/produtos"); });

				connection.end();

	});

	app.get('/form', function(req, res){


		res.render('form',{errosValidacao:{}});

	})





}
