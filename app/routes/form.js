

module.exports = function(app){

	app.get('/form', function(req, res){


		res.render('form',{errosValidacao:{}, produto:{}});

	})

}
