"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cep = 11608545;
var url = "https://viacep.com.br/ws/".concat(cep, "/json");

var getCPF = function getCPF() {
  _axios["default"].get(url).then(function (res) {
    console.log(res);
  })["catch"](function (error) {
    return console.log("Erro na aplica\xE7\xE3ooo: ".concat(error));
  });
};

console.log('Ultimo');
getCPF();