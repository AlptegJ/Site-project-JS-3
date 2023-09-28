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
          <p>Perks of working with us!</p>
          <p>
            Casual Dress Code: TechWeavers promotes a relaxed atmosphere by
            encouraging employees to dress casually. This allows team members to
            feel comfortable and express their personal style while at work.
          </p>
          <p>
            Flexible Work Hours: TechWeavers values work-life balance and offers
            flexible work hours. Team members can adjust their schedules to
            accommodate personal commitments or work during their most
            productive hours.
          </p>
          <p>
            Regular Team Building Events: TechWeavers organizes frequent team
            building activities and events, such as team lunches, game nights,
            and outdoor adventures. These activities promote camaraderie among
            colleagues and create a fun work environment.
          </p>
          <p>
            Creative Workspace: The office environment at TechWeavers is
            designed to spark creativity and innovation. Employees have access
            to comfortable and inspiring workspaces, including creative lounges,
            brainstorming rooms, and colorful decor.
          </p>
          <p>
            Tech Gadgets and Toys: To keep things fun and engaging, TechWeavers
            provides access to the latest tech gadgets and toys in the office.
            This includes VR headsets, gaming consoles, and other cool tech for
            relaxation and inspiration.
          </p>
          <p>
            Learning and Growth Opportunities: TechWeavers invests in employee
            development by offering regular workshops, training sessions, and
            opportunities for skill enhancement. This not only fosters personal
            growth but also keeps the workplace dynamic and exciting.
          </p>
          <p>
            These activities and perks contribute to a workplace culture at
            TechWeavers that is not only professional and productive but also
            cool, relaxed, and enjoyable for all team members.
          </p>
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
