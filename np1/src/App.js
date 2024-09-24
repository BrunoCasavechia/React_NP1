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
  <Header/>


  <h1>Aqui você encontra tudo o que precisa para sua construção!</h1>
  
  <div className='conteudo_principal'>
    <Sidebar/>
    <ProductList/>
  </div>

  <Footer/> 
  </div>
  );
}

export default App;
