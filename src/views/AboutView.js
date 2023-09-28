import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { OtherAreasComponent } from "../components/OtherAreas";
import { AboutComponent } from "../components/About";

export function AboutView() {
  return (
    <div>
      <div>
        <section>
          <AboutComponent />
        </section>
        <section id="about1" className="h-screen">
          <h2>Our Humble Beginnings</h2>
          <p>
            n [Year Founded], TechWeavers emerged as a brainchild of visionary
            founders [Founder Names]. Their shared passion for technology,
            design, and strategy laid the foundation for a company that would
            redefine the digital landscape. Starting from a modest garage
            office, they embarked on a mission to weave together innovation and
            creativity, setting out to create remarkable web experiences for
            businesses of all sizes.
          </p>
        </section>
        <section id="about2" className="h-screen">
          <h2>The Journey of Growth</h2>
          <p>
            Over the years, TechWeavers has experienced remarkable growth and
            transformation. From our initial website projects to partnering with
            industry leaders, we have constantly evolved to meet the changing
            needs of the digital world. Our commitment to excellence and client
            success has allowed us to expand our services, broaden our horizons,
            and establish ourselves as a trusted name in web development,
            branding, and strategy.
          </p>
        </section>
        <section id="about3" className="h-screen">
          <h2>Iconic Projects and Milestones</h2>
          <p>
            TechWeavers' journey is marked by a series of iconic projects and
            significant milestones. Our portfolio boasts collaborations with
            e-commerce giants, startups, and businesses across diverse
            industries. Each project has been a testament to our dedication to
            innovation and our ability to deliver exceptional results. As we
            celebrate our history, we're equally excited about the future and
            the opportunities it holds.
          </p>
        </section>
        <section id="about4" className="h-screen">
          <h2>Our Vision for the Future</h2>
          <p>
            As we reflect on our history, we remain firmly committed to our
            founding principles of weaving technology, strategy, and creativity
            into everything we do. We look ahead with a vision to continue
            pushing the boundaries of web development and branding, embracing
            emerging technologies, and empowering businesses to thrive in the
            digital age. Our journey continues, and we invite you to be a part
            of it as we create a future filled with limitless possibilities.
            Thank you for being a part of the TechWeavers story.
          </p>
        </section>
        <section className="h-screen">
          <OtherAreasComponent />
        </section>
        <section className="h-screen grid grid-rows-2">
          <div className="row-span-1">
            join us
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
