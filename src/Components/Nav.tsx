import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
const Nav = () => {
  const handleToggle = () => {

  }
  return (
    <div className="flex justify-between items-center text-3xl py-[5%] px-[10%] mx-auto text-[var(--text)] bg-[var(--primary)] md:text-xl md:py-[1.5%] sticky top-0">
      <p className="">VR Marketing Agency</p>
      <nav className="hidden top-0 left-0 md:flex flex-col gap-[10%] md:flex-row md:static">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about-us">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
      </nav>
      <div className="flex md:hidden">
        <GiHamburgerMenu style={{ color: 'var(--text)' }} size={40}/>
        <MdClose style={{ color: 'var(--text)' }} size={40} onClick={handleToggle} className="hidden"/>
      </div>
    </div>
  );
};

export default Nav;
