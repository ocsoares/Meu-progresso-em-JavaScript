"use strict";
exports.__esModule = true;
exports.UsersController = void 0;
var arraydatabase_js_1 = require("../arraydatabase.js");
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.prototype.createUser = function (req, res) {
        var fullInformation = req.body;
        var _a = req.body, name = _a.name, age = _a.age, bank = _a.bank; // Desestruturando as Propriedades do Objeto criado no Thunder Client - Post !
        // Criando Condições para NEGAR o Registro (POST) !!
        if (name.length < 1)
            return res.status(403).json({ 'message': 'Não é possível cadastrar um nome vazio !' });
        if (age > 150)
            return res.status(403).json({ 'message': 'Idade inválida !' });
        if (bank.length < 1)
            return res.status(403).json({ 'message': 'Não é possível cadastrar um Banco vazio !' });
        arraydatabase_js_1.arrayDataBase.push(fullInformation);
        return res.status(201).json({ 'message:': "User ".concat(name, " registered successufully") }); // Se tudo der certo, nesse caso, Retorna o Status Code e a mensagem !
    }; // NÃO precisa por vírgula !!!
    UsersController.prototype.showsUsers = function (req, res) {
        return res.status(200).json(arraydatabase_js_1.arrayDataBase);
    };
    return UsersController;
}());
exports.UsersController = UsersController;
;
