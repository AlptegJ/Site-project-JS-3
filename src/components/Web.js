import { HeaderComponent } from "./Header";
import { SocMedComponent } from "./Socmed";

export function WebComponent({ btnId4, btnId5, btnId6 }) {
  return (
    <div className="h-screen grid grid-rows-6 ">
      <div className="row-span-1">
        <HeaderComponent />
      </div>
      <div className=" row-span-4">
        <div className="h-full flex justify-center">
          <div className=" w-10/12 flex flex-col justify-around">
            <div className=" ml-10 mt-10">
              <h4 className="text-3xl">Expertise-Web</h4>
              <h1 className="text-8xl">Projects full of surprises</h1>
            </div>
            <div className="flex justify-end mr-10 ">
              <p className="max-w-xl text-xl ">
                Whether it’s managing your appointments or those of your
                employees, allowing your customers to configure their products
                or create fully customized versions, or simply streamlining your
                customer service, the web has the solutions you need.
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              <button className="text-lg tracking-wider px-3 bg-red-950 font-extrabold rounded-full text-white hover:bg-sky-400">
                <a href={btnId4}>Design</a>
              </button>
              <button className="text-lg tracking-wider px-3 bg-sky-400 font-extrabold rounded-full   text-white hover:bg-red-950">
                <a href={btnId5}>Front-End</a>
              </button>
              <button className="text-lg tracking-wider px-3 bg-red-950 font-extrabold rounded-full text-white hover:bg-sky-400">
                <a href={btnId6}>Content Management</a>
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
