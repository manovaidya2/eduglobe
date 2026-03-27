import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Icons (replacing lucide-react)
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Admissions", path: "/admissions" },
  { label: "Academic Support", path: "/academic-support" },
  { label: "Skills Training", path: "/skills-training" },
  { label: "For Institutions", path: "/institutions" },
  { label: "Partners", path: "/partners" },
  { label: "Why EduGlobe", path: "/why-eduglobe" },
  { label: "Contact", path: "/contact" },
];

// Button Component (inline)
const Button = ({ children, className = "", onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center cursor-pointer rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}`}
  >
    {children}
  </button>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className=" mx-auto flex items-center justify-between h-16 md:h-20 px-8">
        <Link to="/" className="flex items-center gap-2  shrink-0">
          {/* Logo Image with responsive sizing */}
          <div className="relative">
           <img 
  src="/src/assets/new logo.png"
  alt="EduGlobe Logo"
  className="w-18 h-18 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-25 lg:h-25 object-cover"
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

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                location.pathname === link.path
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact">
            <Button>Get in Touch</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 hover:bg-primary/5 rounded-md transition-colors" onClick={() => setOpen(!open)}>
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <nav className=" mx-auto py-4 px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2">Get in Touch</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;