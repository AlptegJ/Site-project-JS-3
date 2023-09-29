import { Link } from "react-router-dom";
import logo from "../assets/logo-tw.png";

export function HeaderComponent() {
  return (
    <header className="flex justify-between items-center py-2 text-m">
      <div className="ml-5 p-1">
        <Link to="/">
          <img src={logo} alt="logo" className="w-12"></img>
        </Link>
      </div>
      <div className="flex gap-5 mr-5 p-1">
        <Link to="/About">About</Link>
        <Link to="/join-us">Career</Link>
        <Link to="/Projects">Projects</Link>
        <button className=" text-xs px-3 bg-red-500 rounded-full text-white hover:bg-orange-200">
          <Link to="/contact">Let's Talk</Link>
        </button>
        <Link to="/Expertise">Expertise</Link>
      </div>
    </header>
  );
}
