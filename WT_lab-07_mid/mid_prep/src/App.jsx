import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import userImg from './assets/images/left_l.png'
function App() {
  const user = {
    naam: "ahsan",
    class: 9,
    programm: "BSCS",
    pfp: userImg,
  };
  return (
    <div className="App">
      <Navbar />
      <Hero user={user} />
      <Footer />
    </div>
  );
}

export default App;
