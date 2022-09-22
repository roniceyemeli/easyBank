import './App.scss';
import Layout from './components/layout';
import NavBar from './components/navBar';
import Footer from './components/footer/';
import { useState } from 'react';
import Menu from './components/menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Layout />
      <Footer/>
    </div>
  );
}

export default App;
