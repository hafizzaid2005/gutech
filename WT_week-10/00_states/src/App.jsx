import logo from './logo.svg';

import Calculator from './components/calculator';
import Login from './components/login';
import Login2 from './components/login2';
import Cart from './components/cart';
import Counter from './components/Counter'
import './App.css';

function App() {

  return (
    <div className="App flex flex-col justify-center items-center">
     / <Counter/>
      <Login2/>
    </div>
  );
}

export default App;
