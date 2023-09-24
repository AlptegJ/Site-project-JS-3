import { Link } from "react-router-dom";
import { AboutComponent } from "../components/About";
import { ProjectsComponent } from "../components/Projects";
import { ExpertiseComponent } from "../components/Expertise";
import { CareerComponent } from "../components/Career";
import { HeaderComponent } from "../components/Header";
import { SocMedComponent } from "../components/Socmed";
import { FooterComponent } from "../components/Footer";
import { HeroComponent } from "../components/Hero";

export function HeroView() {
  return (
    <div>
      <div>
        <section>
          <HeroComponent />
        </section>

        <section>
          <AboutComponent />
        </section>
        <section>
          <ProjectsComponent />
        </section>
        <section>
          <ExpertiseComponent />
        </section>
        <section>
          <CareerComponent />
          <button>
            <Link to="/join-us">Job</Link>
          </button>
        </section>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </div>
  );
}
