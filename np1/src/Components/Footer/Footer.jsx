import styles from "../Footer/Footer.module.css"

const Footer = () => {

    return (
        <div className={styles.footer}>
              <h2>Nossa localização Rua Vicente Paes Filho, 51 - Vila São Jorge, Sorocaba/SP</h2>
              
            <footer className={styles.footer_main}>
                <h3><b>Materiais Casavechia</b> | CNPJ 47.598.420/0001-85 | Telefone: (15) 3229-3388</h3>
                <h3> Desenvolvido por: Bruno Casavechia e Emerson Ribeiro </h3>
            </footer>
        </div>
    )
}
export default Footer