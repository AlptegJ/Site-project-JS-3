import { FooterComponent } from "../components/Footer";
import { StrategyComponent } from "../components/Strategy";
import { OtherAreasComponent } from "../components/OtherAreas";
import { TalentComponent } from "../components/Talent";

export function StrategyView({ current, setCurrent, navigate }) {
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
          className="h-screen w-screen flex flex-col justify-center items-center"
        >
          <div className="h-1/2 w-2/3 flex flex-col gap-5 items-center justify-center">
            <h2 className="text-5xl">Digital Marketing Strategy:</h2>
            <p>
              Developing effective digital marketing strategies is essential for
              reaching and engaging the target audience online. This subject
              covers topics such as search engine optimization (SEO), content
              marketing, social media marketing, email marketing, and paid
              advertising.
            </p>
          </div>
          <div className="h-1/2 w-2/3 flex flex-col gap-5 items-center justify-center">
            <h2 className="text-5xl">
              Market Research and Competitive Analysis:
            </h2>
            <p>
              nderstanding the market and competitors is crucial for making
              informed strategic decisions. This subject involves conducting
              market research, analyzing consumer behavior, and evaluating
              competitors to identify opportunities and threats.
            </p>
          </div>
        </section>
        <section
          id="strategy2"
          className="h-screen w-screen flex flex-col justify-center items-center"
        >
          <div className="h-1/2 w-2/3 flex flex-col gap-5 items-center justify-center">
            <h2 className="text-5xl">Strategic Planning and Execution</h2>
            <p>
              Developing a comprehensive strategic plan that aligns with the
              client's goals and objectives is a key subject in strategy. It
              includes setting clear objectives, defining tactics, creating
              timelines, and monitoring progress to ensure successful execution.
            </p>
          </div>
          <div className="h-1/2 w-2/3 flex flex-col gap-5 items-center justify-center">
            <h2 className="text-5xl">Unique Selling Proposition (USP)</h2>
            <p>
              Defining the client's unique selling proposition or value
              proposition. What sets the client apart from competitors? How can
              they position themselves as a leader in the industry?
            </p>
          </div>
        </section>
        <section className="h-screen">
          <OtherAreasComponent
            current={current}
            setCurrent={setCurrent}
            navigate={navigate}
          />
        </section>
        <section className="h-screen grid grid-rows-3">
          <TalentComponent navigate={navigate} />
          <div className="row-span-1 flex flex-col justify-between">
            <FooterComponent />
          </div>
        </section>
      </div>
    </div>
  );
}
