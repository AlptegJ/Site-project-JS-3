import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HeroView } from "./views/HeroView";
import { BrandingView } from "./views/BrandingView";
import { WebView } from "./views/WebView";
import { ContactView } from "./views/ContactView";
import { ExpertiseView } from "./views/ExpertiseView";
import { ProjectsView } from "./views/ProjectsView";
import { AboutView } from "./views/AboutView";
import { StrategyView } from "./views/StrategyView";
import { JoinUsView } from "./views/JoinUsView";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [current, setCurrent] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<HeroView navigate={navigate} />} />
          <Route
            path="/branding"
            element={<BrandingView current={current} setCurrent={setCurrent} />}
          />
          <Route
            path="/web"
            element={<WebView current={current} setCurrent={setCurrent} />}
          />
          <Route
            path="/strategy"
            element={<StrategyView current={current} setCurrent={setCurrent} />}
          />
          <Route path="/join-us" element={<JoinUsView navigate={navigate} />} />
          <Route
            path="/contact"
            element={<ContactView navigate={navigate} />}
          />
          <Route
            path="/expertise"
            element={<ExpertiseView navigate={navigate} />}
          />
          <Route path="/about" element={<AboutView navigate={navigate} />} />
          <Route
            path="/projects"
            element={<ProjectsView navigate={navigate} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
