import { Link } from "react-router-dom";

export function HeaderComponent() {
  return (
    <header className="flex justify-between py-2 text-m">
      <div className="ml-5 p-1">
        <Link to="/">LOGO</Link>
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
