"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        var _this = this;
        this.addProduct = function (data) {
            //percorrendo o array para validar o id!
            _this.product.forEach(function (product) {
                if (data.code === product.code) {
                    throw new Error("O campo code não pode ser repetido.");
                }
                //validando se todos os campos estão preenchidos!
                if (!data.code ||
                    !data.description ||
                    !data.title ||
                    !data.thumbmail ||
                    !data.price ||
                    !data.stock) {
                    throw new Error("Todos os campos são obrigatorios ao cadastrar um Produto.");
                }
                //adicionando o produto ao array!
                _this.product = __spreadArray(__spreadArray([], _this.product, true), [data], false);
                console.log("Novo produto adicionado com sucesso", product, data);
            });
        };
        this.getProductById = function (id) {
            var foundProduct = _this.product.filter(function (prod) {
                prod.code === id;
            });
            if (!foundProduct) {
                throw new Error("Produto não encontrado!!");
            }
            return foundProduct;
        };
        this.product = [];
    }
    return ProductManager;
}());
exports.default = ProductManager;
