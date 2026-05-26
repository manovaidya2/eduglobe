import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import heroBg from "../../assets/hero-bg.jpg";

const taglines = [
  "Global Career • Skills • Certification • Workforce Development",
  "Empowering International Skilled Workforce",
  "International Skill Development & Career Ecosystem",
  "Building Global Workforce Excellence",
  "Career Consultancy • Training • Certification • Employment Support",
  "International Standards for Skills & Workforce Development",
];

const Hero = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Global education"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary/70" />
        </div>

        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6 border border-gold/30">
              UAE • Global Career, Skills & Workforce Ecosystem
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              International Skill Development, Certification &
              Career Ecosystem
            </h1>

            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl">
              EduGlobe Services LLC, together with the International
              Institute of Skills Development (IISD), delivers a complete
              career, training, trade testing, certification and employment
              support platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
               <Button
  size="lg"
  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-sm px-7 py-5"
>
  Start Your Career Journey
</Button>
              </Link>

              <Link to="/iisd">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-6"
                >
                  Explore IISD Council
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HERO KE NICHE ROTATING STRIP */}
      <div className="bg-[#07162d] py-4 overflow-hidden">
        <div className="container">

          <div className="relative h-7 overflow-hidden text-white">

            <AnimatePresence mode="wait">
              <motion.p
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 text-center text-sm md:text-base font-medium tracking-wide"
              >
                {taglines[i]}
              </motion.p>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;