// @ts-nocheck
import React from "react";
import { MdAssessment } from "react-icons/md";
import { DashboardContentBlocks } from "../components/dashboardContentBlocks/DashboardContentBlocks";
import { ContentCard } from "../components/content-card/ContentCard";
import { HiCheckCircle } from "react-icons/hi";
import { FaAppleAlt } from "react-icons/fa";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { MdOutlineMotionPhotosPaused } from "react-icons/md";
import { IconContext } from "react-icons";
import { EducationPage } from "../../src/pages/educationPage/EducationPage";
import { Rewards } from "../components/rewards/Rewards";
import { EducationCard } from "../components/education-card/EducationCard";
import { copdImg, dietImg } from "../data/images";
import { BoxCard } from "../components/boxCard/BoxCard";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let welPro = "",
  welDesc = "",
  chek = "",
  educ = "",
  onb = "",
  asmt = "",
  progOverv = "",
  newCont = "",
  newContDesc = "",
  eduContent = "",
  upcomTasks = "",
  upcomTasksDec = "",
  upcomAppoints = "",
  upcomAppoint = "",
  upcomAppointsDesc = "",
  copdAsmt = "",
  hyperAsmt = "",
  hyperCheck = "",
  commingSoon = "",
  newAsmt = "",
  newAsmtDesc = "",
  copdCheck = "",
  healthCheck = "",
  upcoAppointSoon = "",
  careManaCheck = "",
  upcoEdu = "",
  upcoEduDec = "",
  whatIsCOPD = "",
  whatIsCOPDTime = "",
  newCheckIn = "",
  newCheckInDesc = "",
  almostThere = "",
  almostThereDesc = "",
  remindOverdue = "",
  remindOverdueDesc = "",
  diabCheck = "",
  pastAsmt = "",
  pastAsmtDesc = "",
  keepUp = "";

if (currentLang === "en") {
  //Journey Tracker
  onb = "Onboarding";
  asmt = "Assessment";
  chek = "Check Ins";
  educ = "Education";
  //---
  welPro = "Welcome to the Program!";
  welDesc = "Learn more about your care journey";
  chek = "Check Ins";
  educ = "Education";
  //--
  progOverv = "Program Overview";
  newCont = "New Content";
  newContDesc = "There is new educational content for you to review";
  eduContent = "Educational Content";
  upcomTasks = "Upcoming Tasks";
  upcomTasksDec = "See what activities you have next:";
  upcomAppoints = "Upcoming Appointments";
  upcomAppoint = "Upcoming Appointment";
  upcomAppointsDesc = "Your Initial assessment will be sent soon";
  copdAsmt = "COPD Assessment";
  hyperAsmt = "Hypertension Assessment";
  hyperCheck = "Hypertension Check In";
  commingSoon = "Coming Soon";
  newAsmt = "New Assessment";
  newAsmt = "You've been assigned a new assessment";
  copdCheck = "COPD Check In";
  healthCheck = "Health Check In";
  upcoAppointSoon = "You have an upcoming appointment";
  careManaCheck = "Care Manager Check In";
  upcoEdu = "Upcoming Education";
  upcoEduDec = "There is new content coming soon.";
  whatIsCOPD = "What is COPD?";
  whatIsCOPDTime = "3 min watch";
  newCheckIn = "New Check In";
  newCheckInDesc = "Let us know how you are feeling";
  almostThere = "Almost There";
  almostThereDesc =
    "Please finish these tasks to keep up the momentum in your health journey.";
  remindOverdue = "Reminder: Your Check Ins are overdue";
  remindOverdueDesc =
    "Complete it to maintain consistency and stay on the right path to wellness.";
  diabCheck = "Diabetes Check In";
  pastAsmt = "Past Assessments";
  pastAsmtDesc = "View Responses";
  keepUp = "Keep up the good work";
} else if (currentLang === "es") {
  //Journey Tracker
  onb = "Inicio";
  asmt = "Evaluación";
  chek = "Revisión";
  educ = "Educación";
  //---
  welPro = "Bienvenido al Programa";
  welDesc = "Aprende más sobre tu programa de cuidados";
  chek = "Revisión";
  educ = "Educación";
  //--
  progOverv = "Vista del Programa";
  newCont = "Nuevo Contenido";
  newContDesc = "Hay nuevo contenido educativo que revisar";
  eduContent = "Contenido Educativo";
  upcomTasks = "Próximas Actividades";
  upcomTasksDec = "Revisa tus próximas actividades:";
  upcomAppoints = "Próximas Citas";
  upcomAppoint = "Próximas Cita";
  upcomAppointsDesc = "Su evaluación inicial será enviada pronto";
  copdAsmt = "Evaluación EPOC";
  hyperAsmt = "Evaluación de hipertensión";
  hyperCheck = "Revisión de Hipertensión";
  commingSoon = "Muy Pronto";
  newAsmt = "Nueva Evaluación";
  newAsmtDesc = "Se le ha asignado una nueva evaluación";
  copdCheck = "Revisión de EPOC";
  healthCheck = "Revisión de Salud";
  upcoAppointSoon = "Tienes una próxima cita";
  careManaCheck = "Revisión Médica";
  upcoEdu = "Próximo Contenido Educativo";
  upcoEduDec = "Próximamente habrá nuevo contenido.";
  whatIsCOPD = "¿Qué es EPOC";
  whatIsCOPDTime = "Duración - 3 min";
  newCheckIn = "Nueva Revisión";
  newCheckInDesc = "Háganos saber cómo se siente";
  almostThere = "Casi Terminas";
  almostThereDesc =
    "Termine estas tareas para mantener el impulso en su camino hacia la salud.";
  remindOverdue = "Recordatorio: Sus revisiones están atrasadas";
  remindOverdueDesc =
    "Complete las actividades para mantenerse en el camino correcto hacia el bienestar.";
  diabCheck = "Revisión de Diabetes";
  pastAsmt = "Evaluaciones Pasadas";
  pastAsmtDesc = "Revisar Respuestas";
  keepUp = "¡Buen trabajo!, mantén el ritmo";
}

const returnRightLabels = () => {
  // check if there is some progress in edu content, assessments and/or checkins, only one progress is needed
  // @ts-ignore
  // sessionStorage.setItem("tasksProgress", JSON.stringify([false, true, false]));
  const tasksProgress = JSON.parse(sessionStorage.getItem("tasksProgress"));

  if (tasksProgress !== null && tasksProgress.some((e) => e === true)) {
    return {
      titles: { almostThere },
      desc: "You’re making good progress on learning about your health condition.",
      type: "eduP",
    };
  } else {
    return {
      titles: newCont,
      desc: newContDesc,
      type: "newP",
    };
  }
};

const allConditionContents = (conditionContent = []) => {
  let welcomeSections = conditionContent
    .map((el) => el.filter((e) => e.sectionType === "welcome").pop())
    .filter((e) => e !== undefined);
  let completed = conditionContent
    .map((el) => el.filter((e) => e.sectionType === "complete").pop())
    .filter((e) => e !== undefined);
  let newSections = conditionContent
    .map((el) => el.filter((e) => e.sectionType === "new").pop())
    .filter((e) => e !== undefined);
  let newPSections = conditionContent
    .map((el) => el.filter((e) => e.sectionType === "newP").pop())
    .filter((e) => e !== undefined);
  let appointSections = conditionContent
    .map((el) => el.filter((e) => e.sectionType === "appoint").pop())
    .filter((e) => e !== undefined);
  let tasksSections = conditionContent
    .map((el) => el.filter((e) => e.sectionType === "tasks").pop())
    .filter((e) => e !== undefined);
  let eduSections = conditionContent
    .map((el) => el.filter((e) => e.sectionType === "edu").pop())
    .filter((e) => e !== undefined);
  let eduPSections = conditionContent
    .map((el) => el.filter((e) => e.sectionType === "eduP").pop())
    .filter((e) => e !== undefined);
  return [
    ...welcomeSections,
    ...completed,
    ...newSections,
    ...newPSections,
    ...eduPSections,
    ...appointSections,
    ...tasksSections,
    ...eduSections,
  ];
};

const onbaordConditionContentSingle = (
  configObjt = { progress: 0, eduTotalContents: 0 },
  stageCurrent = 0
) => {
  const { progress, eduTotalContents } = configObjt;
  const conditionContent = [
    [
      {
        sectionType: "welcome",
        content: [<ContentCard title={progOverv} type="none" />],
      },
      {
        sectionType: configObjt.progress > 0 ? "eduP" : "newP",
        content: [
          <ContentCard
            progress={progress}
            eduTotalContents={eduTotalContents}
            title={eduContent}
            type="progress"
            redirectPath="/education"
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard title={copdAsmt} desc={commingSoon} type="none" />,
          <ContentCard title={hyperAsmt} desc={commingSoon} type="none" />,
        ],
      },
    ],
  ];
  let asmtArr =
    stageCurrent > 0
      ? conditionContent[stageCurrent - 1]
      : conditionContent[stageCurrent];
  return asmtArr;
};

const asmtConditionContentSingle = (
  stageCurrent,
  setRenderStageJourneyTracker,
  stage
) => {
  const conditionContent = [
    [
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title={copdAsmt}
            type="progress"
            fn={setRenderStageJourneyTracker}
            desc="Jote"
          />,
        ],
      },
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title={hyperAsmt}
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },
      {
        sectionType: "eduP",
        content: [
          <ContentCard
            progress={3}
            eduTotalContents={6}
            title={eduContent}
            type="progress"
            redirectPath="/education"
          />,
        ],
      },
      {
        sectionType: "edu",
        content: [
          <EducationCard
            thumbnail={copdImg}
            eduCardtitle={whatIsCOPD}
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime={whatIsCOPDTime}
          />,
        ],
      },
      {
        sectionType: "appoint",
        content: [
          <ContentCard
            title={careManaCheck}
            desc={upcomAppointsDesc}
            type="icon"
            redirectPath="/appointments"
            IconImg={BsCalendar2WeekFill}
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard title={copdCheck} desc={commingSoon} type="none" />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard title={hyperCheck} desc={commingSoon} type="none" />,
        ],
      },
    ],
    [
      {
        sectionType: "complete",
        content: [
          <ContentCard
            progress={100}
            title={copdAsmt}
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={70}
            title={hyperAsmt}
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },
      {
        sectionType: "eduP",
        content: [
          <ContentCard
            progress={3}
            eduTotalContents={6}
            title={eduContent}
            type="progress"
            redirectPath="education"
          />,
        ],
      },
      {
        sectionType: "edu",
        content: [
          <EducationCard
            thumbnail={copdImg}
            eduCardtitle={whatIsCOPD}
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime={whatIsCOPDTime}
          />,
        ],
      },
      {
        sectionType: "appoint",
        content: [
          <ContentCard
            title={careManaCheck}
            desc={upcomAppointsDesc}
            type="icon"
            redirectPath="checkin"
            IconImg={BsCalendar2WeekFill}
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title={hyperCheck}
            desc={commingSoon}
            type="none"
            redirectPath="checkin"
          />,
        ],
      },
    ],
    [
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title="Diabetes Assessment"
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },

      {
        sectionType: "eduP",
        content: [
          <ContentCard
            progress={5}
            eduTotalContents={6}
            title={eduContent}
            type="progress"
            redirectPath="/education"
          />,
        ],
      },
      {
        sectionType: "edu",
        content: [
          <EducationCard
            thumbnail={copdImg}
            eduCardtitle={whatIsCOPD}
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime={whatIsCOPDTime}
          />,
        ],
      },
      {
        sectionType: "appoint",
        content: [
          <ContentCard
            title={careManaCheck}
            desc={upcomAppointsDesc}
            type="icon"
            redirectPath="/appointments"
            IconImg={BsCalendar2WeekFill}
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title={healthCheck}
            desc={commingSoon}
            type="none"
            redirectPath="checkin"
          />,
        ],
      },
    ],
  ];
  return conditionContent[stageCurrent];
};

const chckInConditionContentSingle = (
  configObjt = { progress: 0, eduTotalContents: 0 },
  stageCurrent = 0,
  setRenderStageJourneyTracker
) => {
  const { progress, eduTotalContents } = configObjt;
  const conditionContent = [
    [
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title="Diabetes Check In Tote"
            type="progress"
            redirectPath="/assessments"
            stageCurrent={stageCurrent}
            fn={setRenderStageJourneyTracker}
          />,
        ],
      },
      {
        sectionType: "appoint",
        content: [
          <ContentCard
            title={careManaCheck}
            desc="Upcoming Appointment"
            type="icon"
            redirectPath="checkin"
            IconImg={BsCalendar2WeekFill}
          />,
        ],
      },
      {
        sectionType: configObjt.progress > 0 ? "eduP" : "newP",
        content: [
          <ContentCard
            progress={progress}
            eduTotalContents={eduTotalContents}
            title="Education Content"
            type="progress"
            redirectPath="education"
          />,
        ],
      },
      {
        sectionType: "edu",
        content: [
          <EducationCard
            thumbnail={copdImg}
            eduCardtitle={whatIsCOPD}
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime={whatIsCOPDTime}
          />,
        ],
      },
    ],
    [],
    [],
  ];
  let asmtArr = conditionContent[stageCurrent - 1];
  if (stageCurrent === 0) {
    asmtArr = allConditionContents(conditionContent);
  }
  return asmtArr;
};

const eduConditionContentSingle = (stageCurrent) => {
  const conditionContent = [
    [
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title="COPD  Eduaction"
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title="Care Manager  Eduaction"
            desc={upcomAppointsDesc}
            type="icon"
            redirectPath="checkin"
            IconImg={BsCalendar2WeekFill}
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: (
          <ContentCard
            title="Health Eduaction"
            desc={commingSoon}
            type="none"
            redirectPath="checkin"
          />
        ),
      },
      {
        sectionType: "tasks",
        content: (
          <ContentCard
            progress={90}
            eduTotalContents={100}
            title="Education Content"
            type="progress"
            redirectPath="education"
          />
        ),
      },
    ],
    [],
    [],
  ];
  let asmtArr = conditionContent[stageCurrent - 1];
  if (stageCurrent === 0) {
    asmtArr = allConditionContents(conditionContent);
  }

  return asmtArr;
};

const onbaordConditionContentMulti = (
  configObjt = { progress: 0, eduTotalContents: 0 },
  stageCurrent = 0
) => {
  const { progress, eduTotalContents } = configObjt;

  const conditionContent = [
    [
      {
        sectionType: "welcome",
        content: [
          <ContentCard
            title="COPD Program Overview Multi"
            type="none"
            redirectPath="appointments"
          />,
        ],
      },
      {
        sectionType: "newP",
        content: [
          <ContentCard
            progress={progress}
            eduTotalContents={eduTotalContents}
            title="Educational Content  Multi"
            type="progress"
            redirectPath="appointments"
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title="COPD Assessment  Multi"
            desc={commingSoon}
            type="none"
            redirectPath="appointments"
          />,
        ],
      },
    ],
  ];
  let asmtArr =
    stageCurrent > 0
      ? conditionContent[stageCurrent - 1]
      : conditionContent[stageCurrent];
  return asmtArr;
};

const asmtConditionContentMulti = (stageCurrent) => {
  const conditionContent = [
    [
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title="COPD Assessment Multi"
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },
      {
        sectionType: "appoint",
        content: [
          <ContentCard
            title={careManaCheck}
            desc={upcomAppointsDesc}
            type="icon"
            redirectPath="checkin"
            IconImg={BsCalendar2WeekFill}
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title={copdCheck}
            desc={commingSoon}
            type="none"
            redirectPath="checkin"
          />,
        ],
      },
      {
        sectionType: "edu",
        content: [
          <EducationCard
            thumbnail={copdImg}
            eduCardtitle={whatIsCOPD}
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime={whatIsCOPDTime}
          />,
        ],
      },
    ],
    [
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title="Diabetes Assessment Multi"
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },
      {
        sectionType: "edu",
        content: [
          <EducationCard
            thumbnail={dietImg}
            eduCardtitle="COPD Diet?"
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime={whatIsCOPDTime}
          />,
        ],
      },
    ],
    [
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title="Hypertension Assessment Multi"
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },
    ],
  ];
  let asmtArr = conditionContent[stageCurrent - 1];
  if (stageCurrent === 0) {
    asmtArr = allConditionContents(conditionContent);
  }
  return asmtArr;
};

const chckInConditionContentMulti = (
  configObjt = { progress: 0, eduTotalContents: 0 },
  stageCurrent = 0
) => {
  const { progress, eduTotalContents } = configObjt;

  const conditionContent = [
    [
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title="Health Check In Multi"
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },
      {
        sectionType: "appoint",
        content: [
          <ContentCard
            title="COPD Check In Multi"
            desc="Upcoming Appointment"
            type="icon"
            redirectPath="checkin"
            IconImg={BsCalendar2WeekFill}
          />,
        ],
      },
      {
        sectionType: configObjt.progress > 0 ? "eduP" : "newP",
        content: [
          <ContentCard
            progress={progress}
            eduTotalContents={eduTotalContents}
            title="Education Content"
            type="progress"
            redirectPath="education"
          />,
        ],
      },
      {
        sectionType: "edu",
        content: [
          <EducationCard
            thumbnail={copdImg}
            eduCardtitle={whatIsCOPD}
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime={whatIsCOPDTime}
          />,
        ],
      },
    ],
    [],
    [],
  ];
  let asmtArr = conditionContent[stageCurrent - 1];
  if (stageCurrent === 0) {
    asmtArr = allConditionContents(conditionContent);
  }
  return asmtArr;
};

const eduConditionContentMulti = (stageCurrent) => {
  const conditionContent = [
    [
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={0}
            title="COPD  Eduaction Multi"
            type="progress"
            redirectPath="/assessments"
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title="Care Manager  Eduaction Multi"
            desc={upcomAppointsDesc}
            type="icon"
            redirectPath="checkin"
            IconImg={BsCalendar2WeekFill}
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: (
          <ContentCard
            title="Health Eduaction Multi"
            desc={commingSoon}
            type="none"
            redirectPath="checkin"
          />
        ),
      },
      {
        sectionType: "tasks",
        content: (
          <ContentCard
            progress={90}
            eduTotalContents={100}
            title="Education Content"
            type="progress"
            redirectPath="education"
          />
        ),
      },
    ],
    [],
    [],
  ];
  let asmtArr = conditionContent[stageCurrent - 1];
  if (stageCurrent === 0) {
    asmtArr = allConditionContents(conditionContent);
  }

  return asmtArr;
};

const serveDashboardContents = (
  type = "",
  stage = 0,
  stageCurrent = 0,
  setRenderStageJourneyTracker
) => {
  const storageContents = null; // { progress: 4, eduTotalContents: 7 }; //JSON.parse(sessionStorage.getItem("storedEducation"));
  let stageCurrentContent;

  /*if (urlGetQueryString() === "single") {
  } else if (urlGetQueryString() === "multi") {
    switch (stage) {
      case 1:
        stageCurrentContent = onbaordConditionContentMulti(
          { progress: 0, eduTotalContents: 0 },
          stageCurrent
        );
        break;
      case 2:
        stageCurrentContent = asmtConditionContentMulti(stageCurrent);
        break;
      case 3:
        stageCurrentContent = chckInConditionContentMulti(
          { progress: 0, eduTotalContents: 0 },
          stageCurrent
        );
        break;
      case 4:
        stageCurrentContent = eduConditionContentMulti(stageCurrent);
        break;
    }
  }*/

  switch (stage) {
    case 1:
      stageCurrentContent = onbaordConditionContentSingle(
        { progress: 0, eduTotalContents: 0 },
        stageCurrent
      );
      break;
    case 2:
      stageCurrentContent = asmtConditionContentSingle(
        stageCurrent,
        setRenderStageJourneyTracker
      );
      break;
    case 3:
      stageCurrentContent = chckInConditionContentSingle(
        { progress: 0, eduTotalContents: 0 },
        stage,
        setRenderStageJourneyTracker
      );
      break;
    case 4:
      stageCurrentContent = eduConditionContentSingle(stageCurrent);
      break;
    case 5:
      stageCurrentContent = asmtConditionContentSingle(1, null, 5);
      break;
    case 6:
      stageCurrentContent = chckInConditionContentSingle(
        { progress: 0, eduTotalContents: 0 },
        null,
        6
      );
      break;
    case 7:
      stageCurrentContent = asmtConditionContentSingle(2, null, 7);
      break;
  }

  if (storageContents !== null) {
    return stageCurrentContent.map((e) => {
      if (e.sectionType === type) {
        return e.content;
      }
    });
  } else {
    return stageCurrentContent.map((e) => {
      if (e.sectionType === type) {
        return e.content;
      }
    });
  }
};

const fullDashboardDataSingle = (
  stage = 0,
  stageCurrent = 0,
  setRenderStageJourneyTracker
) => {
  let dashboardDataSingle = {};

  const trackerObj = (status = "") => {
    if (stage === 1 && stageCurrent === 0 && status === "hidden") {
      setRenderStageJourneyTracker(2);
    }
    const getActiveStage = JSON.parse(sessionStorage.getItem("stagesAcive"));
    if (getActiveStage !== null) {
      let savedStage = [];
      let activeStage = 1;
      getActiveStage.map((e) => {
        savedStage.push(e.stage);
        if (e.active) {
          activeStage = e.stage;
        }
      });
      if (stage === 5 || stage === 7) {
      } else if (savedStage.some((e) => e === 6) && stage === 2) {
        stage = 2;
      } else if (savedStage.some((e) => e === 3) && stage === 2) {
        stage = 6;
        sessionStorage.removeItem("stagesAcive");
        sessionStorage.setItem(
          "stagesAcive",
          JSON.stringify([...getActiveStage, { stage: 6, active: true }])
        );
      } else if (stage !== 5 || stage !== 7) {
        stage = activeStage;
      }
    }

    const activityStatus2 = () => {
      const activity2 = sessionStorage.getItem("activePause2");
      if (activity2 !== null && JSON.parse(activity2)) {
        return "paused";
      }
      return "progress";
    };

    const activityStatus3 = () => {
      const activity3 = sessionStorage.getItem("activePause3");
      if (activity3 !== null && JSON.parse(activity3)) {
        return "paused";
      }
      return "progress";
    };

    const renderRightAsmt = () => {
      const currentCheckIn = sessionStorage.getItem("activePauseCheckIns");
      if (currentCheckIn !== null && JSON.parse(currentCheckIn)) {
        return (
          <BoxCard>
            <IconContext.Provider
              value={{
                className: "settings-paused-icon",
              }}
            >
              <div>
                <MdOutlineMotionPhotosPaused />
              </div>
              <p
                className="text-title"
                style={{ textAlign: "center", margin: "1rem 0" }}
              >
                Sorry, this step is paused
              </p>
              <p className="text-midText">
                Please complete previous tasks and assessments before accessing
                this step of your Care Journey
              </p>
              <div className="bottom-spacer"></div>
            </IconContext.Provider>
          </BoxCard>
        );
      } else {
        return;
      }
    };

    const renderRightCheckin = () => {
      const currentCheckIn = sessionStorage.getItem("activePauseCheckIns");
      if (currentCheckIn !== null && JSON.parse(currentCheckIn)) {
        return (
          <BoxCard>
            <IconContext.Provider
              value={{
                className: "settings-paused-icon",
              }}
            >
              <div>
                <MdOutlineMotionPhotosPaused />
              </div>
              <p
                className="text-title"
                style={{ textAlign: "center", margin: "1rem 0" }}
              >
                Sorry, this step is paused
              </p>
              <p className="text-midText">
                Please complete previous tasks and assessments before accessing
                this step of your Care Journey
              </p>
              <div className="bottom-spacer"></div>
            </IconContext.Provider>
          </BoxCard>
        );
      } else {
        return [
          <DashboardContentBlocks
            dashContentTitle={newCheckIn}
            dashContentDesc={newCheckInDesc}
          >
            <ContentCard
              progress={0}
              title={diabCheck}
              type="progress"
              stage={stage}
              fn={setRenderStageJourneyTracker}
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={almostThere}
            dashContentDesc={almostThereDesc}
          >
            <ContentCard
              progress={70}
              title={hyperAsmt}
              type="progress"
              redirectPath="/assessments"
            />
            <ContentCard
              progress={3}
              eduTotalContents={6}
              title={eduContent}
              type="progress"
              redirectPath="education"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomAppoints}
            dashContentDesc={upcoAppointSoon}
          >
            <ContentCard
              title={careManaCheck}
              desc={upcomAppointsDesc}
              type="icon"
              redirectPath="checkin"
              IconImg={BsCalendar2WeekFill}
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcoEdu}
            dashContentDesc={upcoEduDec}
          >
            <EducationCard
              thumbnail={copdImg}
              eduCardtitle={whatIsCOPD}
              eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
              eduCardTime={whatIsCOPDTime}
            />
          </DashboardContentBlocks>,
          <Rewards />,
        ];
      }
    };

    switch (stage) {
      case 1:
        return [
          <DashboardContentBlocks
            dashContentTitle={welPro}
            dashContentDesc={welDesc}
          >
            {serveDashboardContents("welcome", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={returnRightLabels().titles}
            dashContentDesc={returnRightLabels().desc}
          >
            {serveDashboardContents(
              returnRightLabels().type,
              stage,
              stageCurrent
            )}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomTasks}
            dashContentDesc={upcomAppointsDesc}
          >
            {serveDashboardContents("tasks", stage, stageCurrent)}
          </DashboardContentBlocks>,
        ];
      case 2:
        return [
          <DashboardContentBlocks
            dashContentTitle={newAsmt}
            dashContentDesc={newAsmtDesc}
          >
            <ContentCard
              progress={0}
              title={copdAsmt}
              type={activityStatus2()}
              stage={stage}
              fn={setRenderStageJourneyTracker}
            />
            <ContentCard
              progress={0}
              title={hyperAsmt}
              type={activityStatus3()}
              redirectPath="/assessments"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomAppoints}
            dashContentDesc={
              serveDashboardContents("appoint", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : upcoAppointSoon
            }
          >
            {serveDashboardContents("appoint", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming appointments"
              : serveDashboardContents("appoint", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomTasks}
            dashContentDesc={
              serveDashboardContents("tasks", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : upcomTasksDec
            }
          >
            {serveDashboardContents("tasks", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming Tasks"
              : serveDashboardContents("tasks", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcoEdu}
            dashContentDesc={
              serveDashboardContents("edu", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : upcoEduDec
            }
          >
            {serveDashboardContents("edu", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming education"
              : serveDashboardContents("edu", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <Rewards />,
        ];
      case 3:
        return renderRightCheckin();
      case 4:
        return [<EducationPage />];
      case 5:
        return [
          <DashboardContentBlocks dashContentTitle={keepUp}>
            {serveDashboardContents("complete", 5, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={almostThere}
            dashContentDesc={almostThereDesc}
          >
            {serveDashboardContents("new", 5, stageCurrent)}
            {serveDashboardContents("eduP", 5, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomAppoints}
            dashContentDesc={
              serveDashboardContents("appoint", 5, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : upcoAppointSoon
            }
          >
            {serveDashboardContents("appoint", 5, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming appointments"
              : serveDashboardContents("appoint", 5, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomTasks}
            dashContentDesc={
              serveDashboardContents("tasks", 5, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : upcomTasksDec
            }
          >
            {serveDashboardContents("tasks", 5, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming Tasks"
              : serveDashboardContents("tasks", 5, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcoEdu}
            dashContentDesc={
              serveDashboardContents("edu", 5, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : upcoEduDec
            }
          >
            {serveDashboardContents("edu", 5, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming education"
              : serveDashboardContents("edu", 5, stageCurrent)}
          </DashboardContentBlocks>,
          <Rewards />,
        ];
      case 6:
        return [
          <DashboardContentBlocks
            dashContentTitle={newAsmt}
            dashContentDesc={newAsmtDesc}
          >
            <ContentCard
              progress={0}
              title="Diabetes Assessment"
              type="progress"
              redirectPath="/assessments"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={almostThere}
            dashContentDesc={almostThereDesc}
          >
            <ContentCard
              progress={95}
              title={hyperAsmt}
              type="progress"
              redirectPath="/assessments"
            />
            <ContentCard
              progress={5}
              eduTotalContents={6}
              title={eduContent}
              type="progress"
              redirectPath="/education"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks dashContentTitle={pastAsmt}>
            <ContentCard title={copdAsmt} desc={pastAsmtDesc} type="none" />
          </DashboardContentBlocks>,
          <DashboardContentBlocks dashContentTitle={upcomAppoints}>
            <ContentCard
              title={careManaCheck}
              desc={upcomAppointsDesc}
              type="icon"
              IconImg={BsCalendar2WeekFill}
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks dashContentTitle={upcomTasks}>
            <ContentCard
              title={healthCheck}
              desc={commingSoon}
              type="none"
              redirectPath="/memberview/CheckInsPage"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcoEdu}
            dashContentDesc={upcoEduDec}
          >
            <EducationCard
              thumbnail={copdImg}
              eduCardtitle={whatIsCOPD}
              eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
              eduCardTime={whatIsCOPDTime}
            />
          </DashboardContentBlocks>,
          <Rewards />,
        ];
      case 7:
        return [
          <DashboardContentBlocks
            dashContentTitle={remindOverdue}
            dashContentDesc={remindOverdueDesc}
          >
            <ContentCard
              progress={0}
              title={diabCheck}
              type="overdue"
              redirectPath="/memberview/CheckInsPage"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={almostThere}
            dashContentDesc="Please finish these tasks to keep up the momentum in your health journey."
          >
            <ContentCard
              progress={70}
              title={hyperAsmt}
              type="progress"
              redirectPath="/assessments"
            />
            <ContentCard
              progress={3}
              eduTotalContents={6}
              title={eduContent}
              type="progress"
              redirectPath="/education"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomAppoints}
            dashContentDesc={upcoAppointSoon}
          >
            <ContentCard
              title={careManaCheck}
              desc={upcomAppointsDesc}
              type="icon"
              redirectPath="/appointments"
              IconImg={BsCalendar2WeekFill}
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcoEdu}
            dashContentDesc={upcoEduDec}
          >
            <EducationCard
              thumbnail={copdImg}
              eduCardtitle={whatIsCOPD}
              eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
              eduCardTime={whatIsCOPDTime}
            />
          </DashboardContentBlocks>,
          <Rewards />,
        ];
    }
  };
  let dynamicStatus = "";

  if (stage === 4 || stage > 1) {
    dynamicStatus = "activePassive";
  } else {
    dynamicStatus = "hidden";
  }

  const renderActiveIcon = () => {
    const getTrackers = JSON.parse(sessionStorage.getItem("stagesAcive"));
    let provArr = [];
    let activeState = "";
    if (getTrackers !== null) {
      provArr = getTrackers.map((e) => e.stage);
      if (provArr.some((e) => e === stage)) {
        activeState = "active";
      }
    } else {
      if (stage === 2 || stage === 5 || stage === 6) {
        activeState = "active";
      } else if (stage === 3 || stage === 7) {
        activeState = "active";
      } else {
        activeState = "locked";
      }
    }
    return activeState;
  };

  const renderRightTracker = () => {
    const getTrackers = JSON.parse(sessionStorage.getItem("stagesAcive"));
    if (getTrackers !== null) {
      return [
        {
          id: 2,
          title: asmt,
          icon: <MdAssessment />,
          status: renderActiveIcon(),
          layout: trackerObj(),
        },
        {
          id: 3,
          title: chek,
          icon: <HiCheckCircle />,
          status: renderActiveIcon(),
          layout: trackerObj(),
        },
        {
          id: 4,
          title: educ,
          icon: <FaAppleAlt />,
          status: "activePassive",
          layout: trackerObj(),
        },
      ];
    } else {
      return [
        {
          id: 1,
          title: onb,
          icon: <MdAssessment />,
          status: stage == 1 ? "active" : "hidden",
          layout: trackerObj(stage == 1 ? "" : "hidden"),
        },
        {
          id: 2,
          title: asmt,
          icon: <MdAssessment />,
          status: renderActiveIcon(),
          layout: trackerObj(),
        },
        {
          id: 3,
          title: chek,
          icon: <HiCheckCircle />,
          status: renderActiveIcon(),
          layout: trackerObj(),
        },
        {
          id: 4,
          title: educ,
          icon: <FaAppleAlt />,
          status: dynamicStatus,
          layout: trackerObj(),
        },
      ];
    }
  };

  dashboardDataSingle = {
    id: 1,
    scenario: "single",
    dropdown: [],
    tracker: renderRightTracker(),
  };
  return dashboardDataSingle;
};

const fullDashboardDataMulti = (
  stage = 0,
  stageCurrent = 0,
  setRenderStageJourneyTracker
) => {
  let dashboardDataMulti = {};
  const trackerObj = (status = "") => {
    if (stage === 1 && stageCurrent === 0 && status === "hidden") {
      setRenderStageJourneyTracker(2);
    }
    switch (stage) {
      case 1:
        return [
          <DashboardContentBlocks
            dashContentTitle="Welcome to the Program!"
            dashContentDesc="Learn more about your care journey"
          >
            {serveDashboardContents("welcome", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={returnRightLabels().titles}
            dashContentDesc={returnRightLabels().desc}
          >
            {serveDashboardContents(
              returnRightLabels().type,
              stage,
              stageCurrent
            )}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomTasks}
            dashContentDesc="Your Initial assessment will be sent soon"
          >
            {serveDashboardContents("tasks", stage, stageCurrent)}
          </DashboardContentBlocks>,
        ];
      case 2:
        return [
          <DashboardContentBlocks
            dashContentTitle={returnRightLabels().titles}
            dashContentDesc={returnRightLabels().desc}
          >
            {serveDashboardContents("new", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomAppoints}
            dashContentDesc={
              serveDashboardContents("appoint", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : upcoAppointSoon
            }
          >
            {serveDashboardContents("appoint", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming appointments"
              : serveDashboardContents("appoint", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomTasks}
            dashContentDesc={
              serveDashboardContents("tasks", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : upcomTasksDec
            }
          >
            {serveDashboardContents("tasks", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming Tasks"
              : serveDashboardContents("tasks", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcoEdu}
            dashContentDesc={
              serveDashboardContents("edu", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : upcoEduDec
            }
          >
            {serveDashboardContents("edu", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming education"
              : serveDashboardContents("edu", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <Rewards />,
        ];
      case 3:
        return [
          <DashboardContentBlocks
            dashContentTitle={newCheckIn}
            dashContentDesc={newCheckInDesc}
          >
            {serveDashboardContents("new", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={returnRightLabels().titles}
            dashContentDesc={returnRightLabels().tasks}
          >
            {serveDashboardContents(
              returnRightLabels().type,
              stage,
              stageCurrent
            )}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcomAppoints}
            dashContentDesc={upcoAppointSoon}
          >
            {serveDashboardContents("appoint", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={upcoEdu}
            dashContentDesc={upcoEduDec}
          >
            {serveDashboardContents("edu", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <Rewards />,
        ];
      case 4:
        return [<EducationPage />];
    }
  };
  let dynamicStatus = "";

  if (stage === 4 || stage > 1) dynamicStatus = "activePassive";
  else dynamicStatus = "hidden";

  dashboardDataMulti = {
    id: 1,
    scenario: "multi",
    dropdown: [],
    tracker: [
      {
        id: 1,
        title: "Onboarding",
        icon: <MdAssessment />,
        status: stage == 1 ? "active" : "hidden",
        layout: trackerObj(stage == 1 ? "" : "hidden"),
      },
      {
        id: 2,
        title: "Assessment",
        icon: <MdAssessment />,
        status: stage == 2 ? "active" : "locked",
        layout: trackerObj(),
      },
      {
        id: 3,
        title: "Checkin",
        icon: <HiCheckCircle />,
        status: stage == 3 ? "active" : "locked",
        layout: trackerObj(),
      },
      {
        id: 4,
        title: "Education",
        icon: <FaAppleAlt />,
        status: dynamicStatus,
        layout: trackerObj(),
      },
    ],
  };
  return dashboardDataMulti;
};

export const DashboardContents = (
  renderStageJourneyTracker,
  renderConditionDash,
  setRenderStageJourneyTracker
) => {
  let fullDataPrep;
  /*if (urlGetQueryString() === "single") {
  } else if (urlGetQueryString() === "multi") {
    fullDataPrep = fullDashboardDataMulti(
      renderStageJourneyTracker,
      renderConditionDash,
      setRenderStageJourneyTracker
    );
  }*/

  fullDataPrep = fullDashboardDataSingle(
    renderStageJourneyTracker,
    renderConditionDash,
    setRenderStageJourneyTracker
  );

  let arrayIndex =
    renderConditionDash > 0 ? renderConditionDash - 1 : renderConditionDash;

  return {
    jTracker: fullDataPrep,
    renderConts: fullDataPrep.tracker[arrayIndex].layout,
  };
};
