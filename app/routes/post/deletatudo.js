module.exports= function(app){
  app.post('/produtos/deletatudo', function(req, res){

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.deletaTudo(res.redirect("/produtos"));


	})
}
