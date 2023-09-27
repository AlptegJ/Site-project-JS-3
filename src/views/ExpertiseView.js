import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { OtherAreasComponent } from "../components/OtherAreas";
import { ExpertiseComponent } from "../components/Expertise";

export function ExpertiseView() {
  return (
    <div>
      <div>
        <section className="h-screen">
          <ExpertiseComponent />
        </section>
        <section id="expertise1" className="h-screen">
          Expertise
        </section>
        <section id="expertise2" className="h-screen">
          Expertise
        </section>
        <section id="expertise3" className="h-screen">
          Expertise
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
