import { Link } from "react-router-dom";
import { CareerComponent } from "../components/Career";
import { FooterComponent } from "../components/Footer";
import { OtherAreasComponent } from "../components/OtherAreas";
import { WebComponent } from "../components/Web";

export function WebView() {
  const btnId4 = "#web1";
  const btnId5 = "#web2";
  const btnId6 = "#web3";

  return (
    <div>
      <div>
        <section className="h-screen">
          <WebComponent btnId4={btnId4} btnId5={btnId5} btnId6={btnId6} />
        </section>
        <section id="web1" className="h-screen">
          Web ancor 1
        </section>
        <section id="web2" className="h-screen">
          Web ancor 2
        </section>
        <section id="web3" className="h-screen">
          Web ancor 3
        </section>
        <section className="h-screen">
          <OtherAreasComponent />
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
