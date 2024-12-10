 import Reuse from './Reuse';
 import './hero.css'
const HeroSection = ({user}) => {
  return (
    <div className="landing text-white h-screen flex  gap-3 items-center justify-center text-center">
      <Reuse user_data={user} />
      <Reuse user_data={user} />
      <Reuse user_data={user} />
    </div>
  );
};

export default HeroSection;