export function OtherAreasComponent({ current, navigate }) {
  if (current === "branding") {
    return (
      <div className="h-screen w-screen grid grid-rows-6 ">
        <div className=" row-span-4">
          <div className="h-full flex justify-center">
            <div className=" w-10/12 flex flex-col justify-around">
              <div className="flex justify-end mr-10 ">
                <p className="max-w-xl text-xl ">
                  Wanna check out our other areas of expertise?
                </p>
              </div>
              <div className=" flex flex-col ml-10  gap-5">
                <h2
                  className="text-8xl hover:text-red-500"
                  onClick={() => {
                    navigate("/strategy");
                    window.scrollTo(0, 0);
                  }}
                >
                  Strategy
                </h2>
                <h2
                  className="text-8xl hover:text-red-500"
                  onClick={() => {
                    navigate("/web");
                    window.scrollTo(0, 0);
                  }}
                >
                  Web
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 flex justify-center">
          <h4 className="text-5xl">or keep on scrolling!</h4>
        </div>
      </div>
    );
  } else if (current === "web") {
    return (
      <div className="h-screen w-screen grid grid-rows-6 ">
        <div className=" row-span-4">
          <div className="h-full flex justify-center">
            <div className=" w-10/12 flex flex-col justify-around">
              <div className="flex justify-end mr-10 ">
                <p className="max-w-xl text-xl ">
                  Wanna check out our other areas of expertise?
                </p>
              </div>
              <div className=" flex flex-col ml-10  gap-5">
                <h2
                  className="text-8xl hover:text-red-500"
                  onClick={() => {
                    navigate("/strategy");
                    window.scrollTo(0, 0);
                  }}
                >
                  Strategy
                </h2>
                <h2
                  className="text-8xl hover:text-red-500"
                  onClick={() => {
                    navigate("/branding");
                    window.scrollTo(0, 0);
                  }}
                >
                  Branding
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 flex justify-center">
          <h4 className="text-5xl">or keep on scrolling!</h4>
        </div>
      </div>
    );
  } else if (current === "strategy") {
    return (
      <div className="h-screen w-screen grid grid-rows-6 ">
        <div className=" row-span-4">
          <div className="h-full flex justify-center">
            <div className=" w-10/12 flex flex-col justify-around">
              <div className="flex justify-end mr-10 ">
                <p className="max-w-xl text-xl ">
                  Wanna check out our other areas of expertise?
                </p>
              </div>
              <div className=" flex flex-col ml-10  gap-5">
                <h2
                  className="text-8xl hover:text-red-500"
                  onClick={() => {
                    navigate("/branding");
                    window.scrollTo(0, 0);
                  }}
                >
                  Branding
                </h2>
                <h2
                  className="text-8xl hover:text-red-500"
                  onClick={() => {
                    navigate("/web");
                    window.scrollTo(0, 0);
                  }}
                >
                  Web
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-1 flex justify-center">
          <h4 className="text-5xl">or keep on scrolling!</h4>
        </div>
      </div>
    );
  }
}
