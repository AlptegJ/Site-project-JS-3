import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { HeroComponent } from "../components/Hero";
import { TalentComponent } from "../components/Talent";

export function HeroView({ navigate }) {
  return (
    <div>
      <div>
        <section className="h-screen">
          <HeroComponent />
        </section>

        <section className="h-screen">
          <p>
            By specializing in these key subjects within branding, strategy, and
            website building, TechWeavers can offer comprehensive services to
            clients looking to establish a strong online presence and
            effectively communicate their brand message.
          </p>
        </section>
        <section className="h-screen">
          about
          <button>
            <Link to="/about">read more</Link>
          </button>
        </section>
        <section className="h-screen">
          projects
          <button>
            <Link to="/projects">read more</Link>
          </button>
        </section>
        <section className="h-screen grid grid-rows-3">
          <TalentComponent navigate={navigate} />
          <div className="row-span-1 flex flex-col justify-between">
            <FooterComponent />
          </div>
        </section>
      </div>
    </div>
  );
}
