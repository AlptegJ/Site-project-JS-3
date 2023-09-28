import { Link } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { StrategyComponent } from "../components/Strategy";
import { OtherAreasComponent } from "../components/OtherAreas";

export function StrategyView({ current, setCurrent }) {
  const btnId7 = "#strategy1";
  const btnId8 = "#strategy2";
  const btnId9 = "#strategy3";
  const btnId10 = "#strategy4";
  setCurrent("strategy");

  return (
    <div>
      <div>
        <section className="h-screen">
          <StrategyComponent
            btnId7={btnId7}
            btnId8={btnId8}
            btnId9={btnId9}
            btnId10={btnId10}
          />
        </section>
        <section
          id="strategy1"
          className="h-screen flex flex-col justify-center"
        >
          <div className="flex flex-col justify-center items-center gap-10">
            <h2 className="text-5xl">Digital Marketing Strategy:</h2>
            <p className="w-1/2 ml-5">
              Developing effective digital marketing strategies is essential for
              reaching and engaging the target audience online. This subject
              covers topics such as search engine optimization (SEO), content
              marketing, social media marketing, email marketing, and paid
              advertising.
            </p>
          </div>
        </section>
        <section id="strategy2" className="h-screen">
          <h2>Market Research and Competitive Analysis:</h2>
          <p>
            nderstanding the market and competitors is crucial for making
            informed strategic decisions. This subject involves conducting
            market research, analyzing consumer behavior, and evaluating
            competitors to identify opportunities and threats.
          </p>
        </section>
        <section id="strategy3" className="h-screen">
          <h2>Strategic Planning and Execution</h2>
          <p>
            Developing a comprehensive strategic plan that aligns with the
            client's goals and objectives is a key subject in strategy. It
            includes setting clear objectives, defining tactics, creating
            timelines, and monitoring progress to ensure successful execution.
          </p>
        </section>
        <section id="strategy4" className="h-screen">
          <h2></h2>
          <p></p>
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
