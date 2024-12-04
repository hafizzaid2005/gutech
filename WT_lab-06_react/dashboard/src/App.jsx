import './App.css';
import User_Part from "./components/User_part"
import Navbar from './components/header'
function App() {
  return (
    <div className="App flex flex-col gap-3 bg-gray-200 h-screen">
      <Navbar/>
      <User_Part/>
    </div>
  );
}

export default App;
