// importando os arquivos CSS
import './App.css';
import './Styles/reset.css'
import './Styles/header.css';
import './Styles/base.css';
import "./Styles/aside.css";
import "./Styles/filter.css";
import "./Styles/floatbutton-text.css";
import "./Styles/floatbutton.css";
import "./Styles/footer.css";
import "./Styles/searchBar.css";
import "./Styles/text.css";

// Importando os componentes
import Header from "./components/Header.js"
import Filter from './components/Filter.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'



function App() {
  return (
    <div className="App">
      {/* colocar o código HTML da página aqui.. */}

      <Header />
      <Filter />
      <Main />
      

      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
		  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
	

      <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
      

      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

      <Footer />
    </div>

  );
}

export default App;
