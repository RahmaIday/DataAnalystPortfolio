import './App.css';
import NavBar from './components/navbar';
import Education from './sections/education';
import Greeting from './sections/greeting';
import Projects from './sections/projects';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Greeting></Greeting>
      <Education></Education>
      <Projects></Projects>
    </div>
  );
}

export default App;
