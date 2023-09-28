import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { JoinUsComponent } from "../components/JoinUs";

export function JoinUsView() {
  return (
    <div>
      <div>
        <section className="h-screen">
          <JoinUsComponent />
        </section>
        <section id="joinUs1" className="h-screen">
          JoinUs
        </section>
        <section id="joinUs2" className="h-screen">
          JoinUs
        </section>
        <section id="joinUs3" className="h-screen">
          JoinUs
        </section>
        <section className="h-screen grid grid-rows-2">
          <div className="row-span-1 flex flex-col justify-between">
            <FooterComponent />
          </div>
        </section>
      </div>
    </div>
  );
}
