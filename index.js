"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductManager_1 = require("./ProductManager");
var createId = function () {
    var id = Math.floor(Math.random() * 100);
    return id;
};
var producManager = new ProductManager_1.default();
producManager.addProduct({
    code: createId(),
    description: "Relogio Rolex",
    price: 10000000,
    stock: 1,
    thumbmail: "https://www.google.com/search?sca_esv=601184441&sxsrf=ACQVn08L64aP2klg8XLP3ySRoLrQ8N-bXQ:1706129684612&q=rolex&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiSuqqu9PaDAxUMqZUCHdbHDXcQ0pQJegQIGRAB&biw=1280&bih=679&dpr=2#imgrc=FbXLdB8m5Dck0M",
    title: "Rolex",
});
producManager.addProduct({
    code: 1,
    description: "Relogio Rolex",
    price: 10000000,
    stock: 1,
    thumbmail: "https://www.google.com/search?sca_esv=601184441&sxsrf=ACQVn08L64aP2klg8XLP3ySRoLrQ8N-bXQ:1706129684612&q=rolex&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiSuqqu9PaDAxUMqZUCHdbHDXcQ0pQJegQIGRAB&biw=1280&bih=679&dpr=2#imgrc=FbXLdB8m5Dck0M",
    title: "Rolex",
});
producManager.getProductById(1);
producManager.getProductById(2);
