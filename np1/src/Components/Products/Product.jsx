import styles from "../Products/Product.module.css";

const Product = ({imagem_produto, nome_produto, descricao_produto, preco_produto, preco_produto_promocao,}) => {
  return (
    <div className={styles.product}>
      <img src={imagem_produto} />
      <h2>{nome_produto}</h2>
      <p className={styles.produto_descricao}>{descricao_produto}</p>
      <p className={styles.preco_promocao}>R$ {preco_produto_promocao}</p>
      <p className={styles.preco_produto}>R$ {preco_produto}</p>
      <button className={styles.botao_selecionado}>
        <a href="#">Adicionar ao carrinho</a>
      </button>
    </div>
  );
};

export default Product;
