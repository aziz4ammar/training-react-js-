import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';

function App() {
  return (
    <div className="App">
      <Contact/>
      <Dashboard/>
      <About/>
    </div>
  );
}

export default App;
