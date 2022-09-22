import './App.scss';
import Layout from './components/layout';
import NavBar from './components/navBar';
import Footer from './components/footer/';
import { useEffect, useState } from 'react';
import Menu from './components/menu';
import useOnclickOutside from 'react-cool-onclickoutside';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    if (windowSize.innerWidth >= 1020) {
      setMenuOpen(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  function getWindowSize() {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      return { innerWidth, innerHeight };
    }
  }

  const ref = useOnclickOutside(() => {
    setMenuOpen(false);
  });
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
