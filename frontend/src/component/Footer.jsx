import { Link } from "react-router-dom";
import img from "../assets/white bg.png";

// Custom SVG Icons (replacing lucide-react)
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-10 7L2 7"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const Footer = () => {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Why EduGlobe", path: "/why-eduglobe" },
    { label: "Contact Us", path: "/contact" },
  ];

  const serviceLinks = [
    { label: "Admissions Support", path: "/admissions" },
    { label: "Academic Support", path: "/academic-support" },
    { label: "Skills Training", path: "/skills-training" },
    { label: "For Institutions", path: "/institutions" },
    { label: "Partners", path: "/partners" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className=" py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <Link to="/" className=" shrink-0">
          {/* Logo Image with responsive sizing */}
          <div className="relative">
           <img 
  src={img}
  alt="EduGlobe Logo"
  className=" w-24 h-18 sm:w-26 sm:h-20 md:w-30 md:h-24 lg:w-36 lg:h-26 xl:w-40 xl:h-28
   mt-[-36px]
  object-cover
  transition-all duration-300"
onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl';
                  fallback.textContent = 'E';
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          {/* Brand Text - Optional, remove if you only want logo */}
          <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-primary hidden sm:inline-block">
            EduGlobe
          </span>
        </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              EduGlobe Services FZ LLC is a UAE-based education management company specializing in
              institutional setup, operations, and growth worldwide.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">
                  <MapPinIcon />
                </span>
               <span>
  <strong>Head Office:</strong><br />
  {/* Compass Building, Al Shohada Road,<br />
  Al Hamra Industrial Zone-FZ,<br />
  Ras Al Khaimah, United Arab Emirates. */}

  EduGlobe Services FZ-LLC, Ras Al Khaimah(RAK), UAE.<br />
  <strong>Co ordination office :</strong> Unit No. 209-04, Al Kazim, 2nd floor, Hor Alz Anz, Dubai, UAE(Near Al Qiyadah Metro Station).
  {/* <br /><br /> */}

  {/* <strong>Coordinating Office:</strong><br />
  209/4, Sadaf Business Centre,<br />
  Al Kazim Building, Hor Al Anz East,<br />
  Dubai, United Arab Emirates */}
</span>

              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">
                  <MailIcon />
                </span>
                <span>business@eduglobe.ae</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5 shrink-0">
                  <PhoneIcon />
                </span>
                <span>+971 528313726</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-sm opacity-60">
  {/* Links - Mobile pe top, Desktop pe right */}
  <div className="flex gap-4 md:order-2">
    <Link to="/" className="text-[12px] sm:text-xs md:text-sm opacity-80 hover:text-gold transition-colors duration-200">
      Privacy Policy
    </Link>
    <Link to="/" className="text-[12px] sm:text-xs md:text-sm opacity-80 hover:text-gold transition-colors duration-200">
      Terms & Conditions
    </Link>
  </div>
  
  {/* Copyright - Mobile pe bottom, Desktop pe left */}
  <p className="text-[11px] sm:text-xs md:text-sm text-center opacity-80 md:order-1">
    © {new Date().getFullYear()} EduGlobe Services FZ LLC. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  );
};

export default Footer;