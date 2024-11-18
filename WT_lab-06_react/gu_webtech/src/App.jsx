import './App.css';
import Greetings from "./components/greetings"
import Header from "./components/header";
import Content from "./components/content";


function App() {
  return (
    <div className="App">
      <Greetings  />
      <Header  />
      <Content  />
    </div>
  );
}

export default App;
