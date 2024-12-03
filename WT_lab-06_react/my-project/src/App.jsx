import './App.css';
import Navbar from "./components/header";
import { Landing } from './components/landing';
import Cardpage from './components/cardpage'
import Footer from './components/footer';
import Footform from './components/footf';
import Profiles from './components/Profile_page';

function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar />
      <Landing />
      <Cardpage />
      <Profiles/>
      <Footform />
      <Footer />
    </div>
  );
}

export default App;
