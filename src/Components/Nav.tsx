import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-[var(--primary)] text-[var(--text)] sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center text-3xl py-[5%] px-[10%] md:text-xl md:py-[1.5%]">
        <p className="font-bold">VR Marketing Agency</p>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
          <NavLink to="/about-us" className="hover:text-gray-300">About</NavLink>
          <NavLink to="/services" className="hover:text-gray-300">Services</NavLink>
          <NavLink to="/contact-us" className="hover:text-gray-300">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? (
            <MdClose style={{ color: "var(--text)" }} size={40} />
          ) : (
            <GiHamburgerMenu style={{ color: "var(--text)" }} size={40} />
          )}
        </button>
      </div>

      {/* Mobile Navbar */}
      <nav
        className={`flex flex-col gap-4 items-center bg-[var(--primary)] transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "h-auto py-4" : "h-0 overflow-hidden"
        }`}
      >
        <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
        <NavLink to="/about-us" className="hover:text-gray-300">About</NavLink>
        <NavLink to="/services" className="hover:text-gray-300">Services</NavLink>
        <NavLink to="/contact-us" className="hover:text-gray-300">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Nav;
