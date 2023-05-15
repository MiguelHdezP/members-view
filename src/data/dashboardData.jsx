// @ts-nocheck
import React from "react";
import { MdAssessment } from "react-icons/md";
import { DashboardContentBlocks } from "../components/dashboardContentBlocks/DashboardContentBlocks";
import { ContentCard } from "../components/content-card/ContentCard";
import { HiCheckCircle } from "react-icons/hi";
import { FaAppleAlt } from "react-icons/fa";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { EducationPage } from "../../src/pages/educationPage/EducationPage";
import { urlGetQueryString } from "../utils/scripts";
import { Rewards } from "../components/rewards/Rewards";
import { EducationCard } from "../components/education-card/EducationCard";
import { copdImg, dietImg } from "../data/images";

const returnRightLabels = () => {
  // check if there is some progress in edu content, assessments and/or checkins, only one progress is needed
  // @ts-ignore
  // sessionStorage.setItem("tasksProgress", JSON.stringify([false, true, false]));
  const tasksProgress = JSON.parse(sessionStorage.getItem("tasksProgress"));

  if (tasksProgress !== null && tasksProgress.some((e) => e === true)) {
    return {
      titles: "Almost There",
      desc: "You’re making good progress on learning about your health condition.",
      type: "eduP",
    };
  } else {
    return {
      titles: "New Content",
      desc: "There is new educational content for you to review.",
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
  console.log("Fujur: ", progress, eduTotalContents);
  const conditionContent = [
    [
      {
        sectionType: "welcome",
        content: [
          <ContentCard
            title="Program Overview Single"
            type="none"
            redirectPath="appointments"
          />,
        ],
      },
      {
        sectionType: configObjt.progress > 0 ? "eduP" : "newP",
        content: [
          <ContentCard
            progress={progress}
            eduTotalContents={eduTotalContents}
            title="Educational Content  Single"
            type="progress"
            redirectPath="appointments"
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title="COPD Assessment  Single"
            desc="Comming Soon"
            type="none"
            redirectPath="appointments"
          />,
          <ContentCard
            title="Hypertension Assessment Single"
            desc="Comming Soon"
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

const asmtConditionContentSingle = (stageCurrent) => {
  const conditionContent = [
    [
      {
        sectionType: "complete",
        content: [
          <ContentCard
            progress={100}
            title="COPD Assessment"
            type="progress"
            redirectPath="assessment"
          />,
        ],
      },
      {
        sectionType: "new",
        content: [
          <ContentCard
            progress={70}
            title="Hypertension Assessment"
            type="progress"
            redirectPath="assessment"
          />,
        ],
      },
      {
        sectionType: "eduP",
        content: [
          <ContentCard
            progress={3}
            eduTotalContents={6}
            title="Educational Content"
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
            eduCardtitle="What is COPD?"
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime="3 min watch"
          />,
        ],
      },
      {
        sectionType: "appoint",
        content: [
          <ContentCard
            title="Care Manager Check In"
            desc="Upcoming Appointment"
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
            title="Health Check In"
            desc="Comming Sooon"
            type="none"
            redirectPath="checkin"
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

const chckInConditionContentSingle = (
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
            title="Health Check In"
            type="progress"
            redirectPath="assessment"
          />,
        ],
      },
      {
        sectionType: "appoint",
        content: [
          <ContentCard
            title="Care Manager Check In Single"
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
            eduCardtitle="What is COPD?"
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime="3 min watch"
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
  console.log("Meje asmtArr: ", asmtArr);
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
            title="COPD  Eduaction Single"
            type="progress"
            redirectPath="assessment"
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title="Care Manager  Eduaction Single"
            desc="Upcoming Appointment"
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
            title="Health Eduaction Single"
            desc="Comming Soon"
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
            desc="Comming Soon"
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
            redirectPath="assessment"
          />,
        ],
      },
      {
        sectionType: "appoint",
        content: [
          <ContentCard
            title="Care Manager Check In"
            desc="Upcoming Appointment"
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
            title="COPD Check In"
            desc="Comming Sooon"
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
            eduCardtitle="What is COPD?"
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime="3 min watch"
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
            redirectPath="assessment"
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
            eduCardTime="3 min watch"
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
            redirectPath="assessment"
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
            redirectPath="assessment"
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
            eduCardtitle="What is COPD?"
            eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
            eduCardTime="3 min watch"
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
  console.log("Meje asmtArr: ", asmtArr);
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
            redirectPath="assessment"
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title="Care Manager  Eduaction Multi"
            desc="Upcoming Appointment"
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
            desc="Comming Soon"
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

const serveDashboardContents = (type = "", stage = 0, stageCurrent = 0) => {
  const storageContents = null; // { progress: 4, eduTotalContents: 7 }; //JSON.parse(sessionStorage.getItem("storedEducation"));
  let stageCurrentContent;

  if (urlGetQueryString() === "single") {
    switch (stage) {
      case 1:
        stageCurrentContent = onbaordConditionContentSingle(
          { progress: 0, eduTotalContents: 0 },
          stageCurrent
        );
        break;
      case 2:
        stageCurrentContent = asmtConditionContentSingle(stageCurrent);
        break;
      case 3:
        stageCurrentContent = chckInConditionContentSingle(
          { progress: 0, eduTotalContents: 0 },
          stageCurrent
        );
        break;
      case 4:
        stageCurrentContent = eduConditionContentSingle(stageCurrent);
        break;
    }
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
  }
  console.log("stageCurrentContent Juera: ", stageCurrentContent, type);

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
    {
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
            dashContentTitle="Upcoming Tasks"
            dashContentDesc="Your Initial assessment will be sent soon"
          >
            {serveDashboardContents("tasks", stage, stageCurrent)}
          </DashboardContentBlocks>,
        ];
      case 2:
        return [
          <DashboardContentBlocks dashContentTitle="Keep up the good work">
            {serveDashboardContents("complete", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle={returnRightLabels().titles}
            dashContentDesc={returnRightLabels().desc}
          >
            {serveDashboardContents("new", stage, stageCurrent)}
            {serveDashboardContents("eduP", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Appointments"
            dashContentDesc={
              serveDashboardContents("appoint", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : "You have an upcoming appointment"
            }
          >
            {serveDashboardContents("appoint", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming appointments"
              : serveDashboardContents("appoint", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Tasks"
            dashContentDesc={
              serveDashboardContents("tasks", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : "See what activities you have next:"
            }
          >
            {serveDashboardContents("tasks", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming Tasks"
              : serveDashboardContents("tasks", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Education"
            dashContentDesc={
              serveDashboardContents("edu", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : "There is new content coming soon."
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
            dashContentTitle="New Check In"
            dashContentDesc="Let us know how you are feeling"
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
            dashContentTitle="Upcoming Appointments"
            dashContentDesc="You have an upcoming appointment"
          >
            {serveDashboardContents("appoint", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Education"
            dashContentDesc="There is new content coming soon."
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

  dashboardDataSingle = {
    id: 1,
    scenario: "single",
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
            dashContentTitle="Upcoming Tasks"
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
            dashContentTitle="Upcoming Appointments"
            dashContentDesc={
              serveDashboardContents("appoint", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : "You have an upcoming appointment"
            }
          >
            {serveDashboardContents("appoint", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming appointments"
              : serveDashboardContents("appoint", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Tasks"
            dashContentDesc={
              serveDashboardContents("tasks", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : "See what activities you have next:"
            }
          >
            {serveDashboardContents("tasks", stage, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming Tasks"
              : serveDashboardContents("tasks", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Education"
            dashContentDesc={
              serveDashboardContents("edu", stage, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : "There is new content coming soon."
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
            dashContentTitle="New Check In"
            dashContentDesc="Let us know how you are feeling"
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
            dashContentTitle="Upcoming Appointments"
            dashContentDesc="You have an upcoming appointment"
          >
            {serveDashboardContents("appoint", stage, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Education"
            dashContentDesc="There is new content coming soon."
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
  if (urlGetQueryString() === "single") {
    fullDataPrep = fullDashboardDataSingle(
      renderStageJourneyTracker,
      renderConditionDash,
      setRenderStageJourneyTracker
    );
  } else if (urlGetQueryString() === "multi") {
    fullDataPrep = fullDashboardDataMulti(
      renderStageJourneyTracker,
      renderConditionDash,
      setRenderStageJourneyTracker
    );
  }
  let arrayIndex =
    renderConditionDash > 0 ? renderConditionDash - 1 : renderConditionDash;

  return {
    jTracker: fullDataPrep,
    renderConts: fullDataPrep.tracker[arrayIndex].layout,
  };
};
