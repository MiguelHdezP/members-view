import React, { useEffect } from "react";

import "../src/styles/main.scss";
import { currentWindowsWidth, redirect, urlGet } from "./utils/scripts";
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
import { AwardsPage } from "./pages/awardsPage/AwardsPage";
import { EducationPage } from "./pages/educationPage/EducationPage";
import { EducationArticle } from "./pages/educationPage/educationArticle/EducationArticle";
import { EduArticle2 } from "./pages/educationPage/eduArticle2/EduArticle2";
import { Questionnaires } from "./pages/questionnairesPage/Questionnaires";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { UserSettings } from "./pages/userSettings/UserSettings";
import { HealthInsights } from "./pages/healthInsights/HealthInsights";
import { Chats } from "./pages/chats/Chats";
import { Appointments } from "./pages/appointments/Appointments";
import { MemberSettings } from "./pages/userSettings/memberSettings/MemberSettings";
import { HealthGoals } from "./pages/healthInsights/healthGoals/HealthGoals";
import { CareVisits } from "./pages/healthInsights/healthCareVisits/CareVisits";

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone debe ir primero porque su UA tambien contiene "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "desconocido";
}

function App() {
  let curLag = "en";

  useEffect(() => {
    const currentTheme = sessionStorage.getItem("theme");
    const currentLang = sessionStorage.getItem("lang");

    if (currentLang !== null) {
      if (currentLang === "en") {
        curLag = "en";
      } else if (currentLang === "es") {
        curLag = "es";
      }
    } else {
      document.documentElement.setAttribute("lang", "en");
    }

    if (currentTheme !== null) {
      if (currentTheme === "def") {
        document.documentElement.setAttribute("color-scheme", "default");
      } else if (currentTheme === "corp") {
        document.documentElement.setAttribute("color-scheme", "corp");
      } else if (currentTheme === "dark") {
        document.documentElement.setAttribute("color-scheme", "dark");
      }
    } else {
      document.documentElement.setAttribute("color-scheme", "default");
    }

    if (currentWindowsWidth() <= 480 && urlGet("/")) {
      redirect("/memberview/optinonboarding/authentication");
    }
  }, []);

  return (
    <Router>
      <main>
        {currentWindowsWidth() >= 480 ? <Sidebar /> : ""}
        <div>
          {getMobileOperatingSystem()} - {window.innerHeight}
        </div>
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
          <Route path="/memberview/checkinsPage" element={<Questionnaires />} />
          <Route path="/assessments" element={<Questionnaires />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/educationArticle" element={<EducationArticle />} />
          <Route path="/educationArticleNutrition" element={<EduArticle2 />} />
          <Route path="/dashboard" element={<Dashboard lang={curLag} />} />
          <Route
            path="/userSettings"
            element={<UserSettings lang={curLag} />}
          />
          <Route
            path="/userSettings/member-settings"
            element={<MemberSettings />}
          />
          <Route path="/healthInsights" element={<HealthInsights />} />
          <Route path="/healthInsights/goals" element={<HealthGoals />} />
          <Route path="/healthInsights/care-visits" element={<CareVisits />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
