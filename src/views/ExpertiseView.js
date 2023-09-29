import { FooterComponent } from "../components/Footer";
import { ExpertiseComponent } from "../components/Expertise";
import { TalentComponent } from "../components/Talent";

export function ExpertiseView({ navigate }) {
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
