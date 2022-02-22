import About from './Components/About/About';
import Contact from './Components/Contact/Contact.js';
import Experience from './Components/Experience/Experience';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import styles from './Components/styles.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
