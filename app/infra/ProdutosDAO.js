function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query('select * from Produtos', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback) {
    this._connection.query('insert into Produtos set ?', produto, callback);
}

ProdutosDAO.prototype.deletaTudo = function(callback) {this._connection.query('DELETE FROM Produtos',callback)};

module.exports = function() {
    return ProdutosDAO;
};
