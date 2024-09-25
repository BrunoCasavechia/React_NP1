
// Import de uma biblioteca de icones chamada Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


// Style do componente Header

import styles from "../Header/Header.module.css"


const Header = () => {


    return (
        <div>
            <header>
                <nav className={styles.hero}>
                    <ul className={styles.header_ul}>
                        <li><a href="#">Início</a></li>
                        <li><a href="#about">Sobre nós</a></li>
                        <li><a href="#">Fale conosco</a></li>           
                    </ul>
                </nav>

                <div className={styles.header_pesquisa_conteudo}>
                    <img src='/Logo-Casavechia_verde.png' />

                    <div className={styles.header_barra_pesquisa}>
                        <input type="text" placeholder="Procure por código, nome, marca..." />
                        <button type="submit">
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </div>

                </div>


            </header>
        </div>
    )
}
export default Header;