import { Link } from "react-router-dom";

export function FooterComponent() {
  return (
    <>
      <div className="grid grid-rows-4 gap-10">
        <div className="row-span-2 flex justify-center items-center text-8xl">
          <h2>Let's work together?</h2>
        </div>
        <div className="row-span-1 flex justify-center text-3xl">
          <p>
            <Link to="/contact" className="text-red-500 hover:text-sky-400">
              Contact us,
            </Link>{" "}
            we don't bite!
          </p>
        </div>
        <div className="row-span-1 flex justify-center gap-10 p-10">
          <p>080-666-666</p>
          <p>info@company.com</p>
          <p>Techst. 42, 17th Floor</p>
          <p>1337, silicon valley</p>
        </div>
      </div>
      <footer className="h-10 flex justify-end items-center pr-10 bg-red-950">
        Made by AlptegJ
      </footer>
    </>
  );
}
