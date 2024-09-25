// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Sidebar from './Components/Side_Bar/Sidebar';
import ProductList from './Components/Products/Product_list'
import About from './Components/About/about';


// CSS
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />

      <div className='conteudo_principal'>
        <Sidebar />
        <ProductList />
      </div>
      
      <About/>
      <Footer />
    </div>
  );
}

export default App;
