import "../src/styles/main.scss";
import { Sidebar } from "./components/sideBar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JourneyBuilder } from "./pages/JourneyBuilder";
import { CareManager } from "./pages/CareManager";
import {
  Optinonboarding,
  Assessments,
  CheckIns,
  EducationalContent,
} from "./pages/MemberView";
import { Authentication } from "./pages/authentication/Authentication";
import { FirstTimeScreen } from "./pages/firstTimeScreen/FirstTimeScreen";

function App() {
  return (
    <Router>
      <main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<JourneyBuilder />} />
          <Route path="/caremanager" exact element={<CareManager />} />
          <Route
            path="/memberview/optinonboarding"
            exact
            element={<Optinonboarding />}
          />
          <Route
            path="/memberview/assessments"
            exact
            element={<Assessments />}
          />
          <Route path="/memberview/checkins" exact element={<CheckIns />} />
          <Route
            path="/memberview/educationalContent"
            exact
            element={<EducationalContent />}
          />
          <Route
            path="/memberview/optinonboarding/authentication"
            exact
            element={<Authentication />}
          />
          <Route
            path="/memberview/programOverview"
            exact
            element={<FirstTimeScreen />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
