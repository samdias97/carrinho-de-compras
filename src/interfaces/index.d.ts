// INTERFACE DO PRODUTO
export interface Product {
  createdAt: string;
  id: string;
  image: string;
  name: string;
  price: string;
  stock: number;
  // ADICIONADO A PROPRIEDADE "quantity" PARA POSTERIOR COMPARAÇÃO COM O ESTOQUE DISPONÍVEL
  quantity: number;
}