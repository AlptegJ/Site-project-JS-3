import { Link } from "react-router-dom";
import { SocMedComponent } from "./Socmed";

export function ContactComponent() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between bg-red-500 ">
      <header className="bg-red-500 flex justify-between">
        <Link
          to="/"
          className="my-4 mx-5 px-3 py-1 text-xs text-white font-extrabold"
        >
          LOGO
        </Link>
        <Link to="/">
          <button className="my-4 mx-5 px-3 py-1 text-xs text-red-500 font-extrabold rounded-full bg-white  ">
            BACK TO WEBSITE
          </button>
        </Link>
      </header>
      <div className="bg-red-500 flex justify-center">
        <div className="flex justify-between mx-5 w-2/3 ">
          <section className="">
            <h1 className="text-white text-6xl fornt-extrabold">
              Wanna chat over Brunch?
            </h1>
            <form className="flex flex-col text-white my-4 gap-2 ">
              <label
                htmlFor="name-input"
                className="underline underline-offset-4"
              >
                Hi, My name is
                <input
                  name="name-input"
                  id="name-input"
                  className="bg-red-500 mx-2 outline-none underline underline-offset-4"
                ></input>
              </label>
              <label
                htmlFor="errand-input"
                className="underline underline-offset-4 "
              >
                I wanted to tell you that..
              </label>
              <input
                name="errand-input"
                id="errand-input"
                className="bg-red-500 mr-10 outline-none underline underline-offset-4"
              ></input>
              <label
                htmlFor="phone-input"
                className="underline underline-offset-4 "
              >
                you can contact me at +46
                <input
                  name="phone-input"
                  id="phone-input"
                  className="bg-red-500 mx-2 outline-none underline underline-offset-4"
                ></input>
              </label>
              <label
                htmlFor="email-input"
                className="underline underline-offset-4 "
              >
                or by email at
                <input
                  name="email-input"
                  id="email-input"
                  className="bg-red-500 mx-2 outline-none underline underline-offset-4"
                ></input>
              </label>
              <button type="submit"></button>
            </form>
          </section>
          <section className="flex flex-col gap-2">
            <div className="pt-10 text-white text-xl">
              <h3>Give us a call!</h3>
              <p>080-666-666</p>
            </div>
            <div className="pt-5 text-white text-xl">
              <h3>Write to us!</h3>
              <p>info@company.com</p>
            </div>
            <div className="pt-10 text-white text-xl">
              <h3>Come and see us!</h3>
              <p>1337, silicon valley</p>
            </div>
          </section>
        </div>
      </div>
      <footer className="flex text-white my-3 mx-5 px-3 pt-10">
        <SocMedComponent />
      </footer>
    </div>
  );
}
