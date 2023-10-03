import { FooterComponent } from "../components/Footer";
import { JoinUsComponent } from "../components/JoinUs";
import banner3 from "../assets/banner3.png";

export function JoinUsView({ navigate }) {
  return (
    <div>
      <div>
        <section className="h-screen">
          <JoinUsComponent />
        </section>
        <section
          className="h-screen bg-fixed flex flex-col justify-center items-center "
          style={{ backgroundImage: `url(${banner3})` }}
        >
          <div className="flex flex-col justify-center items-center  mb-4 ">
            <h1 className=" items-center text-8xl text-white drop-shadow-[2px_2px_rgba(0,0,0,0.8)]">
              Perks of working with us!
            </h1>
          </div>
        </section>

        <section id="joinUs1" className="h-screen">
          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <div className="card col-span-2 row-span-1  bg-stone-800 m-5 shadow-xl">
              <div className="flex flex-col gap-5 justify-center items-center h-96 px-10 text-pink-50 shadow-xl">
                <h4 className="text-5xl">Casual Dress Code:</h4>
                <p className="px-10">
                  TechWeavers promotes a relaxed atmosphere by encouraging
                  employees to dress casually. This allows team members to feel
                  comfortable and express their personal style while at work.
                </p>
              </div>
            </div>

            <div className="col-span-1 row-span-1">Something</div>

            <div className="card col-span-2 row-span-1  bg-stone-800 m-5 shadow-xl">
              <div className="flex flex-col gap-5 justify-center items-center h-96 px-10 text-pink-50 border-2 border-black shadow-xl">
                <h4 className="text-5xl"> Flexible Work Hours: </h4>
                <p className="px-10">
                  TechWeavers values work-life balance and offers flexible work
                  hours. Team members can adjust their schedules to accommodate
                  personal commitments or work during their most productive
                  hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="joinUs2" className="h-screen">
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <div className="card col-span-1 row-span-2  bg-stone-800 m-5 shadow-xl">
              <div className="flex flex-col gap-5 justify-center items-center h-96 px-10 text-pink-50 shadow-xl">
                <h4 className="text-5xl">Regular Team Building Events: </h4>
                <p className="px-10">
                  TechWeavers organizes frequent team building activities and
                  events, such as team lunches, game nights, and outdoor
                  adventures. These activities promote camaraderie among
                  colleagues and create a fun work environment.
                </p>
              </div>
            </div>

            <div className="col-span-1 row-span-2">Something</div>
            <div className="col-span-1 row-span-2">Something</div>

            <div className="card col-span-1 row-span-2  bg-stone-800 m-5 shadow-xl">
              <div className="flex flex-col gap-5 justify-center items-center h-96 px-10 text-pink-50 border-2 border-black shadow-xl">
                <h4 className="text-5xl">Creative Workspace:</h4>
                <p className="px-10">
                  The office environment at TechWeavers is designed to spark
                  creativity and innovation. Employees have access to
                  comfortable and inspiring workspaces, including creative
                  lounges, brainstorming rooms, and colorful decor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="joinUs3" className="h-screen">
          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <div className="col-span-1 row-span-2">Something</div>

            <div className="card col-span-2 row-span-1  bg-stone-800 m-5 shadow-xl">
              <div className="flex flex-col gap-5 justify-center items-center h-96 px-10 text-pink-50 shadow-xl">
                <h4 className="text-5xl">Tech Gadgets and Toys:</h4>
                <p className="px-10">
                  To keep things fun and engaging, TechWeavers provides access
                  to the latest tech gadgets and toys in the office. This
                  includes VR headsets, gaming consoles, and other cool tech for
                  relaxation and inspiration.
                </p>
              </div>
            </div>

            <div className="card col-span-2 row-span-1  bg-stone-800 m-5 shadow-xl">
              <div className="flex flex-col gap-5 justify-center items-center h-96 px-10 text-pink-50 border-2 border-black shadow-xl">
                <h4 className="text-5xl">Learning and Growth Opportunities:</h4>
                <p className="px-10">
                  TechWeavers invests in employee development by offering
                  regular workshops, training sessions, and opportunities for
                  skill enhancement. This not only fosters personal growth but
                  also keeps the workplace dynamic and exciting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center items-center mx-10 gap-4">
          <h2 className="text-4xl">All of that and more!</h2>
          <p className="">
            These activities and perks contribute to a workplace culture at
            TechWeavers that is not only professional and productive <br /> but
            also friendly, relaxed, and enjoyable for all team members.
          </p>
        </div>

        <section className="h-screen grid grid-rows-2">
          <div className="row-span-1 flex justify-center items-center">
            <button
              className="text-2xl rounded-xl p-2 hover:bg-red-500"
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
            >
              BACK TO WEBSITE
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
