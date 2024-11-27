import './App.css';
import Footer from './components/footer';
import Navbar from "./components/header"
import { Landing } from './components/landing';

function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar/>
      <Landing/>
      <Footer/> 
    </div>
  );
}

export default App;
