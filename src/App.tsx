import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projetos from "./sections/Projetos";
import Contatos from "./sections/Contato";
import StarBackground from "./components/StarBackground";
import "./index.css"

function App() {
  return (
    <div className="app">
      <StarBackground/>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projetos/>
        <Contatos/>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Camila Martins</p>
      </footer>
    </div>
  )
}

export default App