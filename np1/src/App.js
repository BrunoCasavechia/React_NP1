// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Side_Bar/Sidebar';
import ProductList from './Components/Products/Product_list'


// Style / CSS
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />

      <section className="intro">
        <h1>Bem-vindo à Materiais Casavechia</h1>
        <p>O lugar certo para encontrar ferramentas de qualidade e alto desempenho!</p>
      </section>


      <div className='conteudo_principal'>
        <Sidebar />
        <ProductList />
      </div>

      <section className="about" id='about'>
      <div className='historia'>
      <hr />
      <b>Nossa História</b><br/>
      A Materiais Casavechia foi fundada em 1985 com o objetivo de atender a crescente demanda por ferramentas de alta qualidade no setor de construção e manutenção. O nome Casavechia carrega as tradições de uma família apaixonada por inovação e excelência no atendimento, e foi a dedicação ao cliente que nos permitiu crescer de uma pequena loja de bairro para uma das principais referências em ferramentas e materiais de construção no país.
      </div>

      <div className='produtos'>
      <hr />
      <b>Nossos Produtos</b><br/>
      Na Materiais Casavechia, oferecemos uma ampla gama de ferramentas para todos os tipos de projetos. Desde ferramentas manuais e elétricas, até equipamentos especializados para marcenaria, mecânica e jardinagem. Trabalhamos apenas com marcas renomadas que são sinônimos de durabilidade e eficiência, garantindo que nossos clientes sempre tenham o que há de melhor em suas mãos.
      </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
