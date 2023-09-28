import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { OtherAreasComponent } from "../components/OtherAreas";
import { WebComponent } from "../components/Web";

export function WebView({ current, setCurrent }) {
  const btnId4 = "#web1";
  const btnId5 = "#web2";
  const btnId6 = "#web3";
  setCurrent("web");

  return (
    <div>
      <div>
        <section className="h-screen">
          <WebComponent btnId4={btnId4} btnId5={btnId5} btnId6={btnId6} />
        </section>
        <section id="web1" className="h-screen flex flex-col justify-center">
          <div className="flex flex-col justify-center items-center gap-10">
            <h2 className="text-5xl">Web Design and User Experience (UX):</h2>
            <p className="w-1/2 ml-5">
              Creating visually appealing and user-friendly websites is
              essential for engaging visitors and achieving business goals. This
              subject covers aspects such as responsive design, intuitive
              navigation, and optimizing the user experience.
            </p>
          </div>
        </section>
        <section id="web2" className="h-screen">
          <h2>Front-End Development</h2>
          <p>
            Front-end development involves coding the website's user interface
            and ensuring it functions smoothly across various browsers and
            devices. Subjects in this area include HTML, CSS, JavaScript, and
            responsive web design techniques.
          </p>
        </section>
        <section id="web3" className="h-screen">
          <h2>Content Management Systems (CMS)</h2>
          <p>
            Understanding and working with popular CMS platforms like WordPress,
            Drupal, or Joomla is crucial for efficiently building and managing
            websites. This subject includes topics related to content creation,
            publishing, and site maintenance.
          </p>
        </section>
        <section className="h-screen">
          <OtherAreasComponent current={current} setCurrent={setCurrent} />
        </section>
        <section className="h-screen grid grid-rows-2">
          <div className="row-span-1">
            come join
            <button>
              <Link to="/join-us">Job</Link>
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
