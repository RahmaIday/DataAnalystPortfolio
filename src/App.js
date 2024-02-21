import './App.css';
import NavBar from './components/navbar';
import Greeting from './sections/greeting';
import Projects from './sections/projects';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Greeting></Greeting>
      <Projects></Projects>
    </div>
  );
}

export default App;
