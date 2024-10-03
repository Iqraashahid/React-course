import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';

//Router:use to define where exactly in our app we want to have different routes
//routes:used to change the specific portion of your websit
// route:used to define every route we want to have in our website(its self closing component)
function App() {
  return (
    <div className="App">
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<h1>page not found</h1>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
