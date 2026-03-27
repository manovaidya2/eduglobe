import { NavLink as RouterNavLink } from "react-router-dom";

// cn utility function (inline)
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const NavLink = ({ 
  to, 
  className = "", 
  activeClassName = "", 
  pendingClassName = "", 
  children,
  ...props 
}) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive, isPending }) =>
        cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName
        )
      }
      {...props}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;