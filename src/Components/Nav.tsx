import { NavLink } from "react-router";

const Nav = ({ pages }) => {
  console.log("Pages:", pages); // Debugging log

  return (
    <div className="flex justify-center p-6 bg-[color.primary] sticky top-0">
      <p className="flex flex-1 text-2xl justify-center">VR.</p>
      <nav className="flex flex-3 justify-center gap-[5%]">
        {pages && pages.map((page) => (
          <NavLink key={page.page_url} to={page.page_url}>
            {page.name}
          </NavLink>
        ))}
      </nav>
      <button className="flex flex-1 justify-center">Get Started</button>
    </div>
  );
};

export default Nav;