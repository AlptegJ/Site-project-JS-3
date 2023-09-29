import { FooterComponent } from "../components/Footer";
import { ProjectsComponent } from "../components/Projects";
import { TalentComponent } from "../components/Talent";

export function ProjectsView({ navigate }) {
  const btnId11 = "#Projects1";
  const btnId12 = "#Projects2";
  const btnId13 = "#Projects3";
  const btnId14 = "#Projects4";
  return (
    <div>
      <div>
        <section className="h-screen">
          <ProjectsComponent
            btnId11={btnId11}
            btnId12={btnId12}
            btnId13={btnId13}
            btnId14={btnId14}
          />
        </section>
        <section id="projects1" className="h-screen">
          <h4>Projects-branding</h4>
          <h2> Rebranding and Logo Redesign for Upstart Innovations</h2>
          <p>
            Upstart Innovations, a tech startup, approached TechWeavers for a
            complete rebranding. The project encompassed crafting a fresh brand
            identity, redesigning their logo, and developing marketing
            collateral. The rebrand not only boosted their market visibility but
            also garnered positive attention from investors.
          </p>
          <h2>E-Commerce Transformation for LuxeGoods Co.</h2>
          <p>
            TechWeavers partnered with LuxeGoods Co., a luxury retail brand, to
            revamp their e-commerce platform. The project involved creating a
            visually stunning website with a seamless user experience, including
            a user-friendly checkout process and integrated payment gateways.
            The result? A 40% increase in online sales within the first quarter.
          </p>
        </section>
        <section id="projects2" className="h-screen">
          <h4>Projects-web</h4>
          <h2>Non-Profit Website Overhaul for Community Connect</h2>
          <p>
            Community Connect, a non-profit organization, needed a modern
            website to better engage with donors and volunteers. TechWeavers
            revamped their website with responsive design, intuitive navigation,
            and improved content management. The result was a 50% increase in
            online donations and volunteer sign-ups.
          </p>
          <h2>Mobile App Development for HealthTech Solutions</h2>
          <p>
            TechWeavers developed a custom mobile app for HealthTech Solutions,
            a healthcare startup. The app allowed patients to schedule
            appointments, access medical records, and receive real-time health
            alerts. The project received widespread acclaim and contributed to a
            30% increase in patient retention.
          </p>
        </section>
        <section id="projects3" className="h-screen">
          <h4>Projects-Strategy</h4>
          <h2>Comprehensive Digital Strategy for Regional Tourism Board</h2>
          <p>
            A regional tourism board sought TechWeavers' expertise in developing
            a comprehensive digital strategy. This involved optimizing their
            online presence, enhancing social media engagement, and creating
            engaging content. As a result, the region experienced a 20% increase
            in tourist visits and a 15% rise in positive online reviews.
          </p>
          <h2> Educational Platform for EdTech Innovators</h2>
          <p>
            TechWeavers collaborated with an EdTech startup to create an
            interactive educational platform. The project included developing a
            robust learning management system, designing engaging course
            materials, and implementing gamification elements. The platform's
            success was evident through a 25% increase in user engagement and
            improved student performance.
          </p>
        </section>
        <section className="h-screen">
          <p>
            These past projects exemplify TechWeavers' versatility and expertise
            in web development, branding, and strategy across various industries
            and business objectives. We take pride in delivering innovative
            solutions that drive tangible results for our clients.
          </p>
        </section>
        <section className="h-screen">
          <h4>Testimonials</h4>
          <div>
            <h5>Testimonial from LuxeGoods Co.</h5>
            <p>
              "TechWeavers transformed our online business. Their expertise in
              web development and design helped us create a stunning e-commerce
              platform. Our online sales increased significantly, and our
              customers love the user-friendly experience. TechWeavers is a true
              partner in our success."
            </p>
            <p>John Smith, CEO of LuxeGoods Co.</p>
          </div>
          <div>
            <h5>Testimonial from Upstart Innovations</h5>
            <p>
              "TechWeavers took our startup's rebranding to a whole new level.
              Their creative team completely revamped our brand identity and
              logo, giving us a fresh and modern look. The positive response
              from our customers and investors has been overwhelming.
              TechWeavers is the go-to agency for brand transformation."
            </p>
            <p>Sarah Johnson, Founder of Upstart Innovations</p>
          </div>
          <div>
            <h5>Testimonial from Community Connect</h5>
            <p>
              "Our non-profit organization needed a modern website to connect
              with our community better, and TechWeavers delivered beyond our
              expectations. They not only redesigned our website but also
              improved its functionality. The increase in online donations and
              volunteer sign-ups speaks volumes about their expertise."
            </p>
            <p>Emily Davis, Executive Director of Community Connect</p>
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
