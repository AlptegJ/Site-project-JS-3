import { FooterComponent } from "../components/Footer";
import { ProjectsComponent } from "../components/Projects";
import { TalentComponent } from "../components/Talent";
import { ProjectData } from "../constants/ProjectsData";
import { ProjState } from "../states/ProjState";
import { useRecoilState } from "recoil";
import React from "react";

export function ProjectsView({ navigate }) {
  const [projectsDisplay, setProjectsDisplay] = useRecoilState(ProjState);
  const onClick = (event) => {
    setProjectsDisplay(event.target.id);
  };
  return (
    <div>
      <div>
        <section className="h-screen">
          <ProjectsComponent />
        </section>
        <section className=" h-screen w-screen flex flex-col justify-center items-center">
          <div className="flex gap-3 my-10">
            <button
              id="branding"
              className="text-lg tracking-wider px-3 bg-red-950 font-extrabold rounded-full text-white hover:bg-sky-400"
              onClick={onClick}
            >
              Branding
            </button>

            <button
              id="web"
              className="text-lg tracking-wider px-3 bg-sky-400 font-extrabold rounded-full text-white hover:bg-red-950"
              onClick={onClick}
            >
              Web
            </button>
            <button
              id="strategy"
              className="text-lg tracking-wider px-3 bg-red-950 font-extrabold rounded-full text-white hover:bg-sky-400"
              onClick={onClick}
            >
              Strategy
            </button>
            <button
              id="testemonials"
              className="text-lg tracking-wider px-3 bg-sky-400 font-extrabold rounded-full text-white hover:bg-red-950"
              onClick={onClick}
            >
              Testemonials
            </button>
          </div>
          <div className="h-1/2 w-2/3 flex flex-col gap-5 items-center justify-center">
            <ProjectData />
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
