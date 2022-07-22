import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Place from "./components/Place";

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Experience/>
      <Place/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
