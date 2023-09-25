import { Link } from "react-router-dom";
import { CareerComponent } from "../components/Career";
import { FooterComponent } from "../components/Footer";
import { StrategyComponent } from "../components/Strategy";
import { OtherAreasComponent } from "../components/OtherAreas";

export function StrategyView() {
  const btnId7 = "#strategy1";
  const btnId8 = "#strategy2";
  const btnId9 = "#strategy3";
  const btnId10 = "#strategy4";

  return (
    <div>
      <div>
        <section className="h-screen">
          <StrategyComponent
            btnId7={btnId7}
            btnId8={btnId8}
            btnId9={btnId9}
            btnId10={btnId10}
          />
        </section>
        <section id="strategy1" className="h-screen">
          Strategy 1
        </section>
        <section id="strategy2" className="h-screen">
          Strategy 2
        </section>
        <section id="strategy3" className="h-screen">
          Strategy 3
        </section>
        <section id="strategy4" className="h-screen">
          Strategy 4
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
