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
              <p className="opacity-25">Branding</p>
              <p className="hover:text-red-500">
                <Link to="/branding">Branding</Link>
              </p>
              <p className="opacity-25">Branding</p>
            </span>
          </div>
          <div className=" text-8xl ">
            <span className="flex overflow-hidden flex-no-wrap flex-row gap-2">
              <p className="opacity-25  ">webwebweb</p>
              <p className="opacity-100 hover:text-red-500">
                <Link to="/web">Web</Link>
              </p>
              <p className="opacity-25 ">webwebweb</p>
            </span>
          </div>
          <div className=" text-8xl ">
            <span className="flex overflow-hidden flex-no-wrap flex-row gap-2">
              <p className="opacity-25">strategy</p>
              <p className="opacity-100 hover:text-red-500">
                <Link to="/strategy">Strategy</Link>
              </p>
              <p className="opacity-25">strategy</p>
            </span>
          </div>
          <p className="text-sm">
            want to stad out from the crowd? <br />
            Let us bring your project to the next lvl!
          </p>
        </div>
      </div>
      <div className="row-span-1">
        <SocMedComponent />
      </div>
    </div>
  );
}
