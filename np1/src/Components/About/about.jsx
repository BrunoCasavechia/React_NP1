// Importa a estilização por styles
import styles from '../About/about.module.css'

const About = () => {

    return (

            <section className={styles.about} id='about'>
                
                <div className={styles.historia}>
                    <hr />
                    <b>Nossa História</b><br/>
                    Materiais Casavechia foi fundada em 1985 com o objetivo de atender a crescente demanda por ferramentas de alta qualidade no setor de construção e manutenção. O nome Casavechia carrega as tradições de uma família apaixonada por inovação e excelência no atendimento, e foi a dedicação ao cliente que nos permitiu crescer de uma pequena loja de bairro para uma das principais referências em ferramentas e materiais de construção no país.
                </div>

                <div className={styles.produto}>
                    <hr />
                    <b>Nossos Produtos</b><br/>
                    Na Materiais Casavechia, oferecemos uma ampla gama de ferramentas para todos os tipos de projetos. Desde ferramentas manuais e elétricas, até equipamentos especializados para marcenaria, mecânica e jardinagem. Trabalhamos apenas com marcas renomadas que são sinônimos de durabilidade e eficiência, garantindo que nossos clientes sempre tenham o que há de melhor em suas mãos.
                </div>
            </section>
    )
}

export default About;