import { HeaderComponent } from "./Header";
import { SocMedComponent } from "./Socmed";

export function BrandingComponent({ btnId1, btnId2, btnId3 }) {
  return (
    <div className="h-screen w-screen grid grid-rows-6 ">
      <div className="row-span-1">
        <HeaderComponent />
      </div>
      <div className=" row-span-4">
        <div className="h-full flex justify-center">
          <div className=" w-10/12 flex flex-col justify-around">
            <div className=" ml-10 mt-10">
              <h4 className="text-3xl">Expertise-branding</h4>
              <h1 className="text-8xl">Concepts with great looks</h1>
            </div>
            <div className="flex justify-end mr-10 ">
              <p className="max-w-xl text-xl ">
                Because it is the foundation of each project, it's soul and
                personality. It’s essential, in the first moments, to seduce and
                hook your potential client in order to make them want to learn
                more, and we are here to help you do that.
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              <button className="text-lg tracking-wider px-3 bg-red-500 font-extrabold rounded-full text-white hover:bg-orange-200">
                <a href={btnId1}>Identity</a>
              </button>
              <button className="text-lg tracking-wider px-3 bg-white font-extrabold rounded-full border-4 border-orange-300 text-orange-300 hover:text-white hover:bg-red-500">
                <a href={btnId2}>Storytelling</a>
              </button>
              <button className="text-lg tracking-wider px-3 bg-red-500 font-extrabold rounded-full text-white hover:bg-orange-200">
                <a href={btnId3}>Guidelines</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-1">
        <SocMedComponent />
      </div>
    </div>
  );
}
