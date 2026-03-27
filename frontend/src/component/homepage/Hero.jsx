import { Link } from "react-router-dom";
import Button from "../Button";
import heroBg from "../../assets/hero-bg.jpg";

// ArrowRight Icon
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Global education" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
      </div>
      
      <div className="px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6 border border-gold/30">
            UAE-Based Global Education Solutions
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Building and Managing World-Class Educational Institutions
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-2xl">
            EduGlobe Services FZ LLC partners exclusively with educational institutions to establish, manage, and scale universities, colleges, schools, boards, and training organizations.
          </p>
          
          <div className="flex flex-wrap gap-4">
  
  {/* Partner Button */}
  <Link to="/contact">
    <button className="
      px-8 py-3 
      rounded-xl 
      bg-gradient-to-r from-yellow-500 to-yellow-600 
      text-white font-semibold 
      shadow-md 
      hover:scale-105 hover:shadow-lg 
      transition-all duration-300
    ">
      Partner With Us
    </button>
  </Link>

  {/* Explore Button */}
  <Link to="/services">
    <button className="
      px-8 py-3 
      rounded-xl 
      border border-white/40 
      text-white font-semibold 
      backdrop-blur-md 
      bg-white/10 
      hover:bg-white/20 
      hover:scale-105 
      transition-all duration-300 
      flex items-center gap-2
    ">
      Explore Services
      <ArrowRightIcon />
    </button>
  </Link>

</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;