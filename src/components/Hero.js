import { Link } from "react-router-dom";
import { SocMedComponent } from "./Socmed";
import { HeaderComponent } from "./Header";

export function HeroComponent() {
  return (
    <div className="h-screen grid grid-rows-6 ">
      <div className="row-span-1">
        <HeaderComponent />
      </div>

      <div className="row-span-4">
        <div className="h-full flex flex-col justify-center items-center ">
          <div className=" text-8xl ">
            <span className="flex overflow-hidden flex-no-wrap flex-row gap-2">
              <h2 className="opacity-25">Branding</h2>
              <h2 className="hover:text-red-950">
                <Link to="/branding">Branding</Link>
              </h2>
              <h2 className="opacity-25">Branding</h2>
            </span>
          </div>
          <div className=" text-8xl ">
            <span className="flex overflow-hidden flex-no-wrap flex-row gap-2">
              <h2 className="opacity-25  ">webwebweb</h2>
              <h2 className="opacity-100 hover:text-red-950">
                <Link to="/web">Web</Link>
              </h2>
              <h2 className="opacity-25 ">webwebweb</h2>
            </span>
          </div>
          <div className=" text-8xl ">
            <span className="flex overflow-hidden flex-no-wrap flex-row gap-2">
              <h2 className="opacity-25">strategy</h2>
              <h2 className="opacity-100 hover:text-red-950">
                <Link to="/strategy">Strategy</Link>
              </h2>
              <h2 className="opacity-25">strategy</h2>
            </span>
          </div>
          <p className="text-m mt-5">
            Want to stad out from the crowd? Let
            <h2 className="text-4xl hover:text-sky-400">TECHWEAVERS</h2>
            bring your project to the next lvl!
          </p>
        </div>
      </div>
      <div className="row-span-1">
        <SocMedComponent />
      </div>
    </div>
  );
}
