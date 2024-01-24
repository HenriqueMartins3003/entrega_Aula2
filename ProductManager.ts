import { productType } from "./types/Product.Types";

export default class ProductManager {
  product: productType[];

  constructor() {
    this.product = [];
  }

  addProduct = (data: productType) => {
    //percorrendo o array para validar o id!
    this.product.forEach((product) => {
      if (data.code === product.code) {
        throw new Error("O campo code não pode ser repetido.");
      }
      //validando se todos os campos estão preenchidos!
      if (
        !data.code ||
        !data.description ||
        !data.title ||
        !data.thumbmail ||
        !data.price ||
        !data.stock
      ) {
        throw new Error(
          "Todos os campos são obrigatorios ao cadastrar um Produto."
        );
      }
      //adicionando o produto ao array!
      this.product = [...this.product, data];

      console.log("Novo produto adicionado com sucesso", product, data);
    });
  };
  getProductById = (id: number) => {
    const foundProduct = this.product.filter((prod) => {
      prod.code === id;
    });

    if (!foundProduct) {
      throw new Error("Produto não encontrado!!");
    }

    return foundProduct;
  };
}
