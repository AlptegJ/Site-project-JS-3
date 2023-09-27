import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { BrandingComponent } from "../components/Branding";
import { OtherAreasComponent } from "../components/OtherAreas";

export function BrandingView({ current, setCurrent }) {
  const btnId1 = "#branding1";
  const btnId2 = "#branding2";
  const btnId3 = "#branding3";
  setCurrent("branding");
  return (
    <div>
      <div>
        <section className="h-screen">
          <BrandingComponent btnId1={btnId1} btnId2={btnId2} btnId3={btnId3} />
        </section>
        <section id="branding1" className="h-screen">
          branding1
        </section>
        <section id="branding2" className="h-screen">
          branding2
        </section>
        <section id="branding3" className="h-screen">
          branding3
        </section>
        <section className="h-screen">
          <OtherAreasComponent current={current} setCurrent={setCurrent} />
        </section>
        <section className="h-screen grid grid-rows-2">
          <div className="row-span-1">
            join-us
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
