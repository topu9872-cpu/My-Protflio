import NavLink from "./NavLink";



const Navbar = () => {
  const NavData = (
    <ul className="flex items-center gap-3 sm:gap-6 ">
      <li className="text-white cursor-pointer text-xl font-bold "><NavLink href={"/"}>Home</NavLink></li>
      <li className="text-white cursor-pointer text-xl font-bold "><NavLink href={"/about"}>About</NavLink></li>
      <li className="text-white cursor-pointer text-xl font-bold "><NavLink href={"/projects"}>Projects</NavLink></li>
      <li className="text-white cursor-pointer text-xl font-bold "><NavLink href={"/contact"}>Contact</NavLink></li>
      
    </ul>
  );
 
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="w-full px-4 sm:px-10 lg:px-20 py-3 flex items-center justify-between bg-sky-300 backdrop-blur-xl border-b border-white/20 shadow-lg">

        {/* Logo */}
        <div className="text-white font-bold text-sm sm:text-base">
          MyApp
        </div>

        {/* Links */}
        <div className="flex items-center">
          {NavData}
        </div>
<div>
    <button>Hire me</button>
</div>
      </nav>
    </div>
  );
};

export default Navbar;