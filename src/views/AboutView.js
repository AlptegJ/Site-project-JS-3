import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { OtherAreasComponent } from "../components/OtherAreas";
import { AboutComponent } from "../components/About";

export function AboutView() {
  return (
    <div>
      <div>
        <section>
          <AboutComponent />
        </section>
        <section id="about1" className="h-screen">
          About
        </section>
        <section id="about2" className="h-screen">
          About
        </section>
        <section id="about3" className="h-screen">
          About
        </section>
        <section className="h-screen">
          <OtherAreasComponent />
        </section>
        <section className="h-screen grid grid-rows-2">
          <div className="row-span-1">
            join us
            <button>
              <Link to="/join-us">Job</Link>
            </button>
          </div>
          <div className="row-span-1 flex flex-col justify-between">
            <FooterComponent />
          </div>
        </section>
      </div>
    </div>
  );
}
