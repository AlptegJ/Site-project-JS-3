import { HeaderComponent } from "./Header";
import { SocMedComponent } from "./Socmed";

export function JoinUsComponent() {
  return (
    <div className="h-screen w-screen grid grid-rows-6 ">
      <div className="row-span-1">
        <HeaderComponent />
      </div>
      <div className=" row-span-4">
        <div className="h-full flex justify-center">
          <div className=" w-10/12 flex flex-col justify-around">
            <div className=" ml-10 mt-10">
              <h1 className="text-8xl">Come Join the Family</h1>
              <h4 className="text-5xl">
                we are always looking for new talent to join our team{" "}
              </h4>
            </div>
            <div className="flex justify-end mr-10 ">
              <p className="max-w-xl text-xl "> scroll on down!</p>
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
