import './App.css';
import NavBar from './components/navbar';
import Education from './sections/education';
import Greeting from './sections/greeting';
import Projects from './sections/projects';
import Skills from './sections/skills';
import Footer from './sections/footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Greeting></Greeting>
      <br></br>
      <br></br>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
