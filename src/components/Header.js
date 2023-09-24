import { Link } from "react-router-dom";

export function HeaderComponent() {
  return (
    <header className="flex justify-between py-2 text-sm">
      <div className="ml-5 p-1">
        <Link to="/">LOGO</Link>
      </div>
      <div className="flex gap-5 mr-5 p-1">
        <Link to="About">About</Link>
        <Link to="Career">Career</Link>
        <Link to="Projects">Projects</Link>
        <Link to="Expertise">Expertise</Link>
        <button className=" text-xs tracking-wider px-3 bg-red-500 font-extrabold rounded-full text-white ">
          <Link to="contact">Let's Talk</Link>
        </button>
        <div className="">burger</div>
      </div>
    </header>
  );
}
