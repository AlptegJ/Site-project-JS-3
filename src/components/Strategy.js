import { HeaderComponent } from "./Header";
import { SocMedComponent } from "./Socmed";

export function StrategyComponent({ btnId7, btnId8, btnId9, btnId10 }) {
  return (
    <div className="h-screen grid grid-rows-6 ">
      <div className="row-span-1">
        <HeaderComponent />
      </div>
      <div className=" row-span-4">
        <div className="h-full flex justify-center">
          <div className=" w-10/12 flex flex-col justify-around">
            <div className=" ml-10 mt-10">
              <h4 className="text-3xl">Expertise-Strategy</h4>
              <h1 className="text-8xl">Results that speak for themselves</h1>
            </div>
            <div className="flex justify-end mr-10 ">
              <p className="max-w-xl text-xl ">
                No matter the industry, our team can help you better understand
                your digital target audience to ensure that your strategies are
                achieving their goals.
              </p>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              <button className="text-lg tracking-wider px-3 bg-red-500 font-extrabold rounded-full text-white hover:bg-orange-200">
                <a href={btnId7}>Digital Marketing</a>
              </button>
              <button className="text-lg tracking-wider px-3 bg-white font-extrabold rounded-full border-4 border-orange-300 text-orange-300 hover:text-white hover:bg-red-500">
                <a href={btnId8}>Market Research</a>
              </button>
              <button className="text-lg tracking-wider px-3 bg-red-500 font-extrabold rounded-full text-white hover:bg-orange-200">
                <a href={btnId9}>Planning and Execution</a>
              </button>
              <button className="text-lg tracking-wider px-3 bg-white font-extrabold rounded-full border-4 border-orange-300 text-orange-300 hover:text-white hover:bg-red-500">
                <a href={btnId10}>USP</a>
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
