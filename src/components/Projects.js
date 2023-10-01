import { HeaderComponent } from "./Header";
import { SocMedComponent } from "./Socmed";

export function ProjectsComponent() {
  return (
    <div className="h-screen w-screen grid grid-rows-6 ">
      <div className="row-span-1">
        <HeaderComponent />
      </div>
      <div className=" row-span-4">
        <div className="h-full flex justify-center">
          <div className=" w-10/12 flex flex-col justify-around">
            <div className=" ml-10 mt-10">
              <h1 className="text-8xl">Take a look at this stuff we made!</h1>
              <h4 className="text-5xl"> </h4>
            </div>
            <div className="flex justify-end mr-10 ">
              <p className="max-w-xl text-xl ">
                And hear what our clients think of us!
              </p>
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

/*<button className="text-lg tracking-wider px-3 bg-red-500 font-extrabold rounded-full text-white hover:bg-orange-200">
<a href={btnId11}>Branding</a>
</button>*/
