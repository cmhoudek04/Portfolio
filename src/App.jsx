import './App.css'
import Background from "./components/Background.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {

  return (
    <div className="space-y-12 sm:space-y-30">
      <Background />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
