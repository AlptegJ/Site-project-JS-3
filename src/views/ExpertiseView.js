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
        <section
          id="expertise1"
          className="h-screen flex flex-col justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center w-1/2">
            <h2 className="text-7xl">Branding</h2>
            <p>
              Branding is crucial for businesses as it shapes the perception of
              their products or services in the minds of consumers. It
              distinguishes a company from its competitors, fostering brand
              loyalty and trust among customers. A strong and consistent brand
              can lead to increased customer recognition, higher perceived
              value, and long-term business success.
            </p>
            <h4
              className="text-2xl hover:text-red-950 cursor-pointer"
              onClick={() => {
                navigate("/branding");
                window.scrollTo(0, 0);
              }}
            >
              read more..
            </h4>
          </div>
        </section>
        <section
          id="expertise2"
          className="h-screen flex flex-col justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center w-1/2">
            <h2 className="text-7xl">Strategy</h2>
            <p>
              Business strategy is essential as it provides a roadmap for an
              organization's long-term success and growth. It helps companies
              define clear objectives, allocate resources effectively, and make
              informed decisions to remain competitive in a constantly evolving
              market. A well-defined business strategy ensures alignment
              throughout the organization, enabling teams to work cohesively
              toward common goals and adapt to changing market conditions.
            </p>
            <h4
              className="text-2xl hover:text-red-950 cursor-pointer"
              onClick={() => {
                navigate("/strategy");
                window.scrollTo(0, 0);
              }}
            >
              read more..
            </h4>
          </div>
        </section>
        <section
          id="expertise3"
          className="h-screen flex flex-col justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center w-1/2">
            <h2 className="text-7xl">Web</h2>
            <p>
              A professional website is vital for businesses as it serves as
              their digital storefront, making a strong first impression on
              potential customers. It enhances credibility and trust, showcasing
              products, services, and expertise to a global audience 24/7.
              Furthermore, it enables seamless online transactions, customer
              engagement, and marketing efforts, contributing significantly to
              business growth and success in the digital age.
            </p>
            <h4
              className="text-2xl hover:text-red-950 cursor-pointer"
              onClick={() => {
                navigate("/web");
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
