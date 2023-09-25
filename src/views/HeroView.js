import { Link } from "react-router-dom";
import { AboutComponent } from "../components/About";
import { ProjectsComponent } from "../components/Projects";
import { ExpertiseComponent } from "../components/Expertise";
import { CareerComponent } from "../components/Career";
import { FooterComponent } from "../components/Footer";
import { HeroComponent } from "../components/Hero";

export function HeroView() {
  return (
    <div>
      <div>
        <section className="h-screen">
          <HeroComponent />
        </section>

        <section className="h-screen">
          <AboutComponent />
        </section>
        <section className="h-screen">
          <ProjectsComponent />
        </section>
        <section className="h-screen">
          <ExpertiseComponent />
        </section>
        <section className="h-screen grid grid-rows-2">
          <div className="row-span-1">
            <CareerComponent />
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
