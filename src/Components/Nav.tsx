import { NavLink } from "react-router";
const Nav = () => {
  return (
    <div className="flex justify-center bg-[var(--primary)] text-[var(--background)] p-6 text-xm sticky top-0">
      <p className="flex flex-1 text-2xl justify-center">VR.</p>
      <nav className="flex flex-3 justify-center gap-[5%]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Nav;
