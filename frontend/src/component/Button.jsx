const Button = ({ 
  children, 
  variant = "primary", 
  size = "default", 
  className = "", 
  onClick,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    // Filled — matches navbar "Get in Touch" button exactly
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    // Border only — transparent bg, primary border & text, fills on hover
    secondary: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
    // Ghost — no border, just text
    ghost: "text-primary hover:bg-primary/10",
  };
  
  const sizes = {
    default: "px-6 py-2.5 text-sm",   // matches navbar button padding/size
    lg: "px-8 py-4 text-lg",
    sm: "px-4 py-2 text-xs",
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.default} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;