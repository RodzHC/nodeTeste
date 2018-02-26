


module.exports = function(app){


	var listaProdutos = function(req, res, next) {
			var connection = app.infra.connectionFactory();
			var produtosDAO = new app.infra.ProdutosDAO(connection);

			produtosDAO.lista(function(err, results) {
					if(err){return next(err); }
					res.format({
							html: function() {
									res.render('lista', {lista:results});
							},
							json: function() {
									res.json(results);
							}
					});
			});

			connection.end();
	}


	app.get("/produtos",listaProdutos);


	app.post('/produtos', function(req,res){

				var produto = req.body;
        console.log(produto);



        req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();


        var errors = req.validationErrors();

        if(errors){

					res.format({
							html: function() {
									res.status(400).render('form', {errosValidacao:errors,produto:produto});
							},
							json: function() {
									res.status(400).json(errors);
							}


        	});

					return ;
				}

				var connection = app.infra.connectionFactory();
				var produtosDAO = new app.infra.ProdutosDAO(connection);

				produtosDAO.salva(produto, function(erro,results){ res.redirect("/produtos"); });

				connection.end();

	});








}
