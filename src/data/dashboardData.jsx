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
import { EducationPage2 } from "../../src/pages/educationPage/EducationPage2";
import { urlGetQueryString } from "../utils/scripts";
import { Rewards } from "../components/rewards/Rewards";
import { EducationCard } from "../components/education-card/EducationCard";
import { copdImg, dietImg } from "../data/images";
import { BoxCard } from "../components/boxCard/BoxCard";

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
  const conditionContent = [
    [
      {
        sectionType: "welcome",
        content: [<ContentCard title="Program Overview" type="none" />],
      },
      {
        sectionType: configObjt.progress > 0 ? "eduP" : "newP",
        content: [
          <ContentCard
            progress={progress}
            eduTotalContents={eduTotalContents}
            title="Educational Content "
            type="progress"
            redirectPath="/education"
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title="COPD Assessment "
            desc="Comming Soon"
            type="none"
          />,
          <ContentCard
            title="Hypertension Assessment"
            desc="Comming Soon"
            type="none"
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
            title="COPD Assessment"
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
            title="Hypertension Assessment"
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
            title="Educational Content"
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
            redirectPath="/appointments"
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
          />,
        ],
      },
      {
        sectionType: "tasks",
        content: [
          <ContentCard
            title="Hypertension Check In"
            desc="Comming Sooon"
            type="none"
          />,
        ],
      },
    ],
    [
      {
        sectionType: "complete",
        content: [
          <ContentCard
            progress={100}
            title="COPD Assessment"
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
            title="Hypertension Assessment"
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
            title="Hypertension Check In"
            desc="Comming Sooon"
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
            title="Educational Content"
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
            redirectPath="/appointments"
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
            title="Care Manager Check In"
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
            title="Health Eduaction"
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
            redirectPath="/assessments"
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

const serveDashboardContents = (
  type = "",
  stage = 0,
  stageCurrent = 0,
  setRenderStageJourneyTracker
) => {
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
      let savedStage = getActiveStage.map((e) => e.stage);
      if (savedStage.some((e) => e === 6) && stage === 2) {
        stage = 2;
      } else if (savedStage.some((e) => e === 3) && stage === 2) {
        stage = 6;
        sessionStorage.setItem(
          "stagesAcive",
          JSON.stringify([...getActiveStage, { stage: 6, active: true }])
        );
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
            dashContentTitle="New Check In"
            dashContentDesc="Let us know how you are feeling"
          >
            <ContentCard
              progress={0}
              title="Diabetes Check In"
              type="progress"
              stage={stage}
              fn={setRenderStageJourneyTracker}
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Almost There"
            dashContentDesc="Please finish these tasks to keep up the momentum in your health journey."
          >
            <ContentCard
              progress={70}
              title="Hypertension Assessment"
              type="progress"
              redirectPath="/assessments"
            />
            <ContentCard
              progress={3}
              eduTotalContents={6}
              title="Educational Content"
              type="progress"
              redirectPath="education"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Appointments"
            dashContentDesc="You have an upcoming appointment"
          >
            <ContentCard
              title="Care Manager Check In"
              desc="Upcoming Appointment"
              type="icon"
              redirectPath="checkin"
              IconImg={BsCalendar2WeekFill}
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Education"
            dashContentDesc="There is new content coming soon."
          >
            <EducationCard
              thumbnail={copdImg}
              eduCardtitle="What is COPD?"
              eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
              eduCardTime="3 min watch"
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
            dashContentTitle="New Assessment"
            dashContentDesc="You've been assigned a new assessment"
          >
            <ContentCard
              progress={0}
              title="COPD Assessment"
              type={activityStatus2()}
              stage={stage}
              fn={setRenderStageJourneyTracker}
            />
            <ContentCard
              progress={0}
              title="Hypertension Assessment"
              type={activityStatus3()}
              redirectPath="/assessments"
            />
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
        return renderRightCheckin();
      case 4:
        return [<EducationPage2 />];
      case 5:
        return [
          <DashboardContentBlocks dashContentTitle="Keep up the good work">
            {serveDashboardContents("complete", 5, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Almost there"
            dashContentDesc="Please finish these tasks to keep up the momentum in your health journey."
          >
            {serveDashboardContents("new", 5, stageCurrent)}
            {serveDashboardContents("eduP", 5, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Appointments"
            dashContentDesc={
              serveDashboardContents("appoint", 5, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : "You have an upcoming appointment"
            }
          >
            {serveDashboardContents("appoint", 5, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming appointments"
              : serveDashboardContents("appoint", 5, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Tasks"
            dashContentDesc={
              serveDashboardContents("tasks", 5, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : "See what activities you have next:"
            }
          >
            {serveDashboardContents("tasks", 5, stageCurrent).every(
              (e) => e === undefined
            )
              ? "No upcoming Tasks"
              : serveDashboardContents("tasks", 5, stageCurrent)}
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Education"
            dashContentDesc={
              serveDashboardContents("edu", 5, stageCurrent).every(
                (e) => e === undefined
              )
                ? ""
                : "There is new content coming soon."
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
            dashContentTitle="New Assessment"
            dashContentDesc="You've been assigned a new assessment"
          >
            <ContentCard
              progress={0}
              title="Diabetes Assessment"
              type="progress"
              redirectPath="/assessments"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Almost there"
            dashContentDesc="Please finish these tasks to keep up the momentum in your health journey."
          >
            <ContentCard
              progress={95}
              title="Hypertension Assessment"
              type="progress"
              redirectPath="/assessments"
            />
            <ContentCard
              progress={5}
              eduTotalContents={6}
              title="Educational Content"
              type="progress"
              redirectPath="/education"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks dashContentTitle="Past Assessments">
            <ContentCard
              title="COPD Assessment"
              desc="View Responses"
              type="none"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks dashContentTitle="Upcoming Appointments">
            <ContentCard
              title="Care Manager Check In"
              desc="Upcoming Appointment"
              type="icon"
              IconImg={BsCalendar2WeekFill}
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks dashContentTitle="Upcoming Tasks">
            <ContentCard
              title="Health Check In"
              desc="Comming Sooon"
              type="none"
              redirectPath="/memberview/CheckInsPage"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Education"
            dashContentDesc="There is new content coming soon."
          >
            <EducationCard
              thumbnail={copdImg}
              eduCardtitle="What is COPD?"
              eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
              eduCardTime="3 min watch"
            />
          </DashboardContentBlocks>,
          <Rewards />,
        ];
      case 7:
        return [
          <DashboardContentBlocks
            dashContentTitle="Reminder: Your Check Ins are overdue"
            dashContentDesc="Complete it to maintain consistency and stay on the right path to wellness."
          >
            <ContentCard
              progress={0}
              title="Diabetes Check In"
              type="overdue"
              redirectPath="/memberview/CheckInsPage"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Almost There"
            dashContentDesc="Please finish these tasks to keep up the momentum in your health journey."
          >
            <ContentCard
              progress={70}
              title="Hypertension Assessment"
              type="progress"
              redirectPath="/assessments"
            />
            <ContentCard
              progress={3}
              eduTotalContents={6}
              title="Educational Content"
              type="progress"
              redirectPath="/education"
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Appointments"
            dashContentDesc="You have an upcoming appointment"
          >
            <ContentCard
              title="Care Manager Check In"
              desc="Upcoming Appointment"
              type="icon"
              redirectPath="/appointments"
              IconImg={BsCalendar2WeekFill}
            />
          </DashboardContentBlocks>,
          <DashboardContentBlocks
            dashContentTitle="Upcoming Education"
            dashContentDesc="There is new content coming soon."
          >
            <EducationCard
              thumbnail={copdImg}
              eduCardtitle="What is COPD?"
              eduCardDesc="Lorem ipsum dolor sit amet, consectetur adipsiscing dolor"
              eduCardTime="3 min watch"
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

  const handleOnbordVary = () => {
    const storedOnboardIcons = JSON.parse(
      sessionStorage.getItem("stagesAcive")
    );
    let reduceArrVals = [];
    if (storedOnboardIcons !== null) {
      reduceArrVals.map((e) => e.stage);
    }

    if (stage === 1) {
      return "active";
    } else if (reduceArrVals.some((e) => e === 2)) {
      return "active";
    } else {
      return "locked";
    }
  };

  const handleAsmtVary = () => {
    if (stage === 2 || stage === 5 || stage === 6) {
      return "active";
    } else {
      return "locked";
    }
  };

  const handleChkInVary = () => {
    if (stage === 3 || stage === 7) {
      return "active";
    } else {
      return "locked";
    }
  };

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
        status: handleAsmtVary(),
        layout: trackerObj(),
      },
      {
        id: 3,
        title: "Check ins",
        icon: <HiCheckCircle />,
        status: handleChkInVary(),
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
        return [<EducationPage2 />];
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
