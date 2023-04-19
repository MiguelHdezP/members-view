import React, { useState } from "react";
import "../src/styles/main.scss";
import { currentWindowsWidth } from "./utils/scripts";
import { DataProvider } from "./data/context/dataContext";
import { Sidebar } from "./components/sideBar/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
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
import { AwardsPage } from "./pages/awardsPage/AwardsPage";
import { EducationPage } from "./pages/educationPage/EducationPage";
import { EducationArticle } from "./pages/educationPage/educationArticle/EducationArticle";
import { Questionnaires } from "./pages/questionnairesPage/Questionnaires";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { UserSettings } from "./pages/userSettings/UserSettings";
import { HealthInsights } from "./pages/healthInsights/HealthInsights";
import { Chats } from "./pages/chats/Chats";
import { Appointments } from "./pages/appointments/Appointments";
import { MemberSettings } from "./pages/userSettings/memberSettings/MemberSettings";

function App() {
  if (currentWindowsWidth() > 480) {
    redirect("/dashboard");
  }

  return (
    <DataProvider>
      <Router>
        <main>
          {currentWindowsWidth() > 480 ? <Sidebar /> : ""}
          <Routes>
            <Route path="/" element={<JourneyBuilder />} />
            <Route path="/caremanager" element={<CareManager />} />
            <Route
              path="/memberview/optinonboarding"
              element={<Optinonboarding />}
            />
            <Route path="/memberview/assessments" element={<Assessments />} />
            <Route path="/memberview/checkins" element={<CheckIns />} />
            <Route
              path="/memberview/educationalContent"
              element={<EducationalContent />}
            />
            <Route
              path="/memberview/optinonboarding/authentication"
              element={<Authentication />}
            />
            <Route
              path="/memberview/programOverview"
              element={<FirstTimeScreen />}
            />
            <Route
              path="/memberview/checkinsPage"
              element={<Questionnaires />}
            />
            <Route path="/assessments" element={<Questionnaires />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/educationArticle" element={<EducationArticle />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/userSettings" element={<UserSettings />} />
            <Route
              path="/userSettings/member-settings"
              element={<MemberSettings />}
            />
            <Route path="/healthInsights" element={<HealthInsights />} />
            <Route path="/chats" element={<Chats />} />
            <Route path="/appointments" element={<Appointments />} />
          </Routes>
        </main>
      </Router>
    </DataProvider>
  );
}

export default App;
