import { FooterComponent } from "../components/Footer";
import { BrandingComponent } from "../components/Branding";
import { OtherAreasComponent } from "../components/OtherAreas";
import { TalentComponent } from "../components/Talent";

export function BrandingView({ current, setCurrent, navigate }) {
  const btnId1 = "#branding1";
  const btnId2 = "#branding2";
  const btnId3 = "#branding3";
  setCurrent("branding");
  return (
    <div>
      <div>
        <section className="h-screen ">
          <BrandingComponent btnId1={btnId1} btnId2={btnId2} btnId3={btnId3} />
        </section>
        <section
          id="branding1"
          className="h-screen flex flex-col justify-center"
        >
          <div className="flex flex-col justify-center items-center gap-10">
            <h2 className="text-5xl">Brand Identity Development:</h2>
            <p className="w-1/2 ml-5">
              This subject involves creating a unique and consistent brand
              identity for clients. It includes designing logos, choosing color
              schemes, selecting fonts, and creating visual elements that
              represent the essence and values of the brand.
            </p>
          </div>
        </section>
        <section
          id="branding2"
          className="h-screen flex flex-col justify-center"
        >
          <div className="flex flex-col justify-center items-center gap-10">
            <h2 className="text-5xl">Brand Messaging and Storytelling</h2>
            <p className="w-1/2 ml-5">
              Crafting compelling brand stories and messages is crucial for
              connecting with the target audience. This subject focuses on
              developing a brand's narrative, defining its voice, and
              communicating its mission effectively through various channels.
            </p>
          </div>
        </section>
        <section
          id="branding3"
          className="h-screen flex flex-col justify-center"
        >
          <div className="flex flex-col justify-center items-center gap-10">
            <h2 className="text-5xl">Brand Guidelines and Standards</h2>
            <p className="w-1/2 ml-5">
              Establishing brand guidelines ensures that all branding elements
              are used consistently across different platforms and materials.
              This subject involves creating comprehensive brand manuals that
              provide guidelines for logo usage, typography, color palettes, and
              more.
            </p>
          </div>
        </section>
        <section className="h-screen">
          <OtherAreasComponent
            current={current}
            setCurrent={setCurrent}
            navigate={navigate}
          />
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
