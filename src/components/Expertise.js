import { HeaderComponent } from "./Header";
import { SocMedComponent } from "./Socmed";

export function ExpertiseComponent() {
  return (
    <div className="h-screen w-screen grid grid-rows-6 ">
      <div className="row-span-1">
        <HeaderComponent />
      </div>
      <div className=" row-span-4">
        <div className="h-full flex justify-center">
          <div className=" w-10/12 flex flex-col justify-around">
            <div className=" ml-10 mt-10">
              <h1 className="text-8xl">Nothing is to good for your projects</h1>
              <h4 className="text-5xl">branding + web + strategy</h4>
            </div>
            <div className="flex justify-end mr-10 ">
              <p className="max-w-xl text-xl ">
                you want the best for your project. We get that. Here's what we
                can do to take it even further.
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
