import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { HeroView } from "./views/HeroView";
import { BrandingView } from "./views/BrandingView";
import { WebView } from "./views/WebView";
import { ContactView } from "./views/ContactView";
import { AboutComponent } from "./components/About";
import { CareerComponent } from "./components/Career";
import { ProjectsComponent } from "./components/Projects";
import { ExpertiseComponent } from "./components/Expertise";
import { StrategyView } from "./views/StrategyView";
import { JoinUsView } from "./views/JoinUsView";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<HeroView />} />
          <Route path="/Branding" element={<BrandingView />} />
          <Route path="/web" element={<WebView />} />
          <Route path="/strategy" element={<StrategyView />} />
          <Route path="/join-us" element={<JoinUsView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/career" element={<CareerComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
          <Route path="/expertise" element={<ExpertiseComponent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
