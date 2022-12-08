import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ReadMore from './components/ReadMore';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <ReadMore/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
