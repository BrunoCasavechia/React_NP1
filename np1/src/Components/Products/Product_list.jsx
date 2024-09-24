// Componente Produto
import Product from "./Product"

// Imagens
import furadeiraMakita from '../Products/Assets/furadeira_makita.png'
import compreensor_ar from '../Products/Assets/compreensor_ar.png'
import parafusadeira from '../Products/Assets/parafusadeira.png'
import esmirilhadeira_angular from '../Products/Assets/esmirilhadeira_angular.png'
import Martelete_parafusador from '../Products/Assets/Martelete_parafusador.png'
import Martelete_rompedor from '../Products/Assets/Martelete_rompedor.png'

// Styles
import styles from "../Products/Product.module.css"


const ProductList = () => {
    return (
        <div className={styles.product_list}>

            <Product 
            imagem_produto={furadeiraMakita}
            nome_produto="Furadeira Makita" 
            descricao_produto="Furadeira de Impacto 1/2 Pol. 760W"
            preco_produto_promocao={360.99} 
            preco_produto={261.99} 
            />

            <Product 
            imagem_produto={compreensor_ar}
            nome_produto="Compreesor de ar Tekna" 
            descricao_produto="Silencioso 1,8 HP 50 litros sem óleo"
            preco_produto_promocao={1332.22} 
            preco_produto={1189.99} />

            <Product 
            imagem_produto={parafusadeira}
            nome_produto="Parafusadeira e Furadeira WORX" 
            descricao_produto="Bateria 20V WX101.9 WORX" 
            preco_produto_promocao={287.67}
            preco_produto={258.99} /> 

            <Product 
            imagem_produto={esmirilhadeira_angular}
            nome_produto="Esmerilhadeira Angular WORX" 
            descricao_produto="À Bateria 20V BRUSHLESS" 
            preco_produto_promocao={611.99}
            preco_produto={549.99} />

            <Product 
            imagem_produto={Martelete_parafusador}
            nome_produto="Martelete Perfurador Rompedor" 
            descricao_produto="SDS-PLUS 720W 2,3KG com Maleta" 
            preco_produto_promocao={777.67}
            preco_produto={699.99} />

            <Product 
            imagem_produto={Martelete_rompedor}
            nome_produto="Martelete Rompedor BOSCH" 
            descricao_produto="Rompedor + Kit 10 Brocas"
            preco_produto_promocao={1037.67}
            preco_produto={933.90} />

            <Product 
            imagem_produto={Martelete_rompedor}
            nome_produto="Martelete Rompedor BOSCH" 
            descricao_produto="Rompedor + Kit 10 Brocas"
            preco_produto_promocao={1037.67}
            preco_produto={933.90} />

            <Product 
            imagem_produto={Martelete_rompedor}
            nome_produto="Martelete Rompedor BOSCH" 
            descricao_produto="Rompedor + Kit 10 Brocas"
            preco_produto_promocao={1037.67}
            preco_produto={933.90} />



   
        </div>
    )
}

export default ProductList