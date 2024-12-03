import './App.css';
import Greetings from './components/Profile_card'
import Shopping from "./components/shopping";

function App() {
  return (
    <div className="App">
      {/* PAGE-1 */}
      <div className="h-screen  w-full flex justify-center items-center">
        <Greetings
          name="Ahsan Siddiqui"
          occup="Full stack Developer"
          age={19}
          location="Karachi"
        />
      </div>

      <div className="h-screen bg-[#f2f2f2] w-full flex justify-center items-center">
        <Shopping
          title="Playstation 5"
          desc="The PlayStation 5 is the pinnacle of next-generation gaming,
          delivering an unparalleled gaming experience with its ultra-high-speed
          SSD that drastically reduces load times. Its powerful hardware enables
          breathtaking 4K visuals, complete with ray tracing technology for
          lifelike lighting and shadows that make your games come alive. The
          innovative Tempest 3D AudioTech immerses you in a soundscape where
          every detail can be heard, while the DualSense Wireless Controller
          offers adaptive triggers."
          price={100000}
          imageurl="https://wallpapercave.com/wp/wp6967920.jpg"
        />
      </div>
    </div>
  );
}

export default App;
