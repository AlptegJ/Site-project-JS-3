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

        <section className="h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center w-1/2">
            <p className="text-3xl">
              By specializing in these key subjects within branding, strategy,
              and website building, TechWeavers can offer comprehensive services
              to clients looking to establish a strong online presence and
              effectively communicate their brand message.
            </p>
          </div>
        </section>
        <section
          id="hero1"
          className="h-screen flex flex-col justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center w-1/2">
            <h2 className="text-7xl">About</h2>
            <p>
              TechWeavers is a dynamic web development company specializing in
              web design, branding, and strategic services. With a track record
              of delivering innovative solutions, TechWeavers helps businesses
              establish a compelling online presence, create memorable brand
              experiences, and develop effective digital strategies. Their
              expertise and commitment to client success make them a trusted
              partner in navigating the digital landscape.
            </p>
            <h4
              className="text-2xl hover:text-red-950 cursor-pointer"
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
            >
              read more..
            </h4>
          </div>
        </section>
        <section
          id="hero2"
          className="h-screen flex flex-col justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center w-1/2">
            <h2 className="text-7xl">Projects</h2>
            <p>
              TechWeavers stands out in project execution due to their
              dedication to innovative solutions tailored to each client's
              unique needs. Their ability to seamlessly integrate technology,
              design, and strategy ensures that projects not only meet but
              exceed expectations. TechWeavers' commitment to client success and
              a track record of delivering tangible results make them a standout
              choice for businesses seeking exceptional web development,
              branding, and strategic services.
            </p>
            <h4
              className="text-2xl hover:text-red-950 cursor-pointer"
              onClick={() => {
                navigate("/projects");
                window.scrollTo(0, 0);
              }}
            >
              read more..
            </h4>
          </div>
        </section>
        <section
          id="hero3"
          className="h-screen flex flex-col justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center w-1/2">
            <h2 className="text-7xl">Expertise</h2>
            <p>
              TechWeavers' expertise is exceptional because it spans across
              multiple domains, including web development, branding, and
              strategy, allowing them to offer comprehensive solutions under one
              roof. Their team comprises seasoned professionals who stay at the
              forefront of industry trends, ensuring clients receive
              cutting-edge strategies and designs. TechWeavers' commitment to
              continuous learning and innovation sets them apart, making them a
              trusted partner for businesses seeking top-tier expertise in the
              digital landscape.
            </p>
            <h4
              className="text-2xl hover:text-red-950 cursor-pointer"
              onClick={() => {
                navigate("/expertise");
                window.scrollTo(0, 0);
              }}
            >
              read more..
            </h4>
          </div>
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
