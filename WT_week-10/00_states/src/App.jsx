import Calculator from './components/calculator';
import Counter from './components/Counter'
import './App.css';
import Login from './components/login';

function App() {

  return (
    <div className="App flex flex-col justify-center items-center">
      <Counter/>
      <Calculator/>
      <Login />
    </div>
  );
}

export default App;
