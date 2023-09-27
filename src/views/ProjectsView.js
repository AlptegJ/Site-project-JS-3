import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { OtherAreasComponent } from "../components/OtherAreas";
import { ProjectsComponent } from "../components/Projects";

export function ProjectsView() {
  const btnId11 = "#Projects1";
  const btnId12 = "#Projects2";
  const btnId13 = "#Projects3";
  const btnId14 = "#Projects4";
  return (
    <div>
      <div>
        <section className="h-screen">
          <ProjectsComponent
            btnId11={btnId11}
            btnId12={btnId12}
            btnId13={btnId13}
            btnId14={btnId14}
          />
        </section>
        <section id="projects1" className="h-screen">
          Projects-branding
        </section>
        <section id="projects2" className="h-screen">
          Projects-web
        </section>
        <section id="projects3" className="h-screen">
          Projects-Strategy
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
