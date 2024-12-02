import './App.css';
import Greetings from './components/Profile_card'

function App() {
  return (
    <div className="App flex justify-center items-center h-screen w-full bg-black">
      <Greetings name="Ahsan Siddiqui" occup="Full stack Developer" age="19" />
    </div>
  );
}

export default App;
