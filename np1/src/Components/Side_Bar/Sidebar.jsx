import styles from "../Side_Bar/Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <section>
                <h2>Categorias</h2>
                <article>
                    <ul className={styles.Sidebar_ul}>
                        <li>
                            <a href="#" className={styles.nome_menu}>Materiais de Construção</a>
                            <ul className={styles.Submenu}>
                                <li><a href="#">Cimento e Areia</a></li>
                                <li><a href="#">Blocos e Tijolos</a></li>
                                <li><a href="#">Concreto</a></li>
                                <li><a href="#">Telhas</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className={styles.nome_menu}>Ferramentas</a>
                            <ul className={styles.Submenu}>
                                <li><a href="#">Manuais</a></li>
                                <li><a href="#">Elétricas</a></li>
                                <li><a href="#">Medidas e Níveis</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className={styles.nome_menu}>Materiais Elétricos</a>
                            <ul className={styles.Submenu}>
                                <li><a href="#">Fios e Cabos</a></li>
                                <li><a href="#">Interruptores e Tomadas</a></li>
                                <li><a href="#">Quadros Elétricos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className={styles.nome_menu}>Tinta e Pintura</a>
                            <ul className={styles.Submenu}>
                                <li><a href="#">Tintas</a></li>
                                <li><a href="#">Pincéis e Rolinhos</a></li>
                                <li><a href="#">Lixas e Abrasivos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className={styles.nome_menu}>Jardinagem</a>
                            <ul className={styles.Submenu}>
                                <li><a href="#">Ferramentas de Jardim</a></li>
                                <li><a href="#">Adubos e Fertilizantes</a></li>
                                <li><a href="#">Mangueiras</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className={styles.nome_menu}>Iluminação</a>
                            <ul className={styles.Submenu}>
                                <li><a href="#">Lâmpadas</a></li>
                                <li><a href="#">Luminárias</a></li>
                                <li><a href="#">Fitas de LED</a></li>
                            </ul>
                        </li>
                    </ul>
                </article>  
            </section>
        </div>
    );
}

export default Sidebar;
