//  import Reuse from './Reuse';
import cartimg from '../assets/images/cart.png'
import mainimg from '../assets/images/kababjees.jpg'
const HeroSection = () => {
  return (
    <div className="landing bg-[#8f160d] text-white h-screen flex  gap-3 items-center justify-center text-center">
      
      {/* LEFT SIDE */}
      <div className='flex flex-col items-start gap-5'>
        <div className='text-left'>
        <h1 className='text-6xl text-white font-bold'>Taste The <span className='text-[#f7ba3f]'>KababJees</span></h1>
        <h1 className='text-6xl text-white font-bold'>Magic</h1>
        </div>
        <p className='capitalize'>Crispy Delicious Chicken that keeps you coming back</p>

        {/* CART IMAGE COLOR CANNOT BE RED BECAUSE SVGs ARE PAID and React icons might not work while checking  */}
        <button className='bg-[#f7ba3f] text-[#8f160d] flex items-center gap-3 w-36 font-medium text-base px-1 py-1  rounded-2xl hover:p-2 transition-all ease-in-out'> <img src={cartimg} alt="" className='w-5' />Order Now </button>
      </div>

      {/* right side */}
      <img src={mainimg} alt="" className='w-1/3 rounded-full' />
    </div>
  );
};

export default HeroSection;