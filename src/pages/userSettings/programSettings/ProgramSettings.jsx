import React, { useEffect, useState } from "react";
import { BoxCard } from "../../../components/boxCard/BoxCard";
import { Switch } from "@mui/material";
import { JourneyTracker } from "../../../components/journey-tracker/JourneyTracker";
import { StatusFlag } from "../../../components/statusFlag/StatusFlag";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { LinkButton } from "../../../components/linkButton/LinkButton";
import Modal from "@mui/material/Modal";
import { MdAssessment } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
import { FaAppleAlt } from "react-icons/fa";
import { PrimaryButton } from "../../../components/primaryButton/PrimaryButton";

export const ProgramSettings = ({ fn, lang = "" }) => {
  const label = { inputProps: { "aria-label": "leave program" } };
  const [checkedSwitch, setCheckedSwitch] = useState(false);
  const [checkedSwitch2, setCheckedSwitch2] = useState(false);
  const [checkedSwitch3, setCheckedSwitch3] = useState(false);
  const [checkedSwitch4, setCheckedSwitch4] = useState(false);
  const [renderCheckIn, setRenderCheckIn] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);

  const handleOpen = () => setOpenModal(!openModal);

  const handleLeave = () => {
    handleOpen();
    sessionStorage.setItem("activePause", `${checkedSwitch}`);
    sessionStorage.setItem("exitProgram", `${!checkedSwitch}`);
  };

  const provTracker = {
    id: 0,
    dropdown: [],
    scenario: "single",
    tracker: [
      {
        id: 1,
        icon: <MdAssessment />,
        layout: [],
        status: "active",
        title: "Assessment",
      },
      {
        id: 2,
        icon: <HiCheckCircle />,
        layout: [],
        status: "activePassive",
        title: "Check Ins",
      },
      {
        id: 3,
        icon: <FaAppleAlt />,
        layout: [],
        status: "activePassive",
        title: "Educational Content",
      },
    ],
  };

  useEffect(() => {
    let currentProgramActivePaused = sessionStorage.getItem("activePause");
    let currentProgramActivePaused2 = sessionStorage.getItem("activePause2");
    let currentProgramActivePaused3 = sessionStorage.getItem("activePause3");
    let currentProgramActivePaused4 = sessionStorage.getItem(
      "activePauseCheckIns"
    );

    if (currentProgramActivePaused !== null) {
      setCheckedSwitch(true);
    }
    if (currentProgramActivePaused2 !== null) {
      setCheckedSwitch2(true);
    }
    if (currentProgramActivePaused3 !== null) {
      setCheckedSwitch3(true);
    }
    if (currentProgramActivePaused4 !== null) {
      setCheckedSwitch4(true);
    }
  }, []);

  const handleChangeSwitch = (event) => {
    const switchChecked = event.target.checked;
    if (switchChecked) {
      sessionStorage.setItem("activePause", `${switchChecked}`);
      sessionStorage.setItem("activePause2", `${switchChecked}`);
      sessionStorage.setItem("activePause3", `${switchChecked}`);
      sessionStorage.setItem(`activePauseCheckIns`, `${switchChecked}`);
    } else {
      sessionStorage.removeItem("activePause");
      sessionStorage.removeItem("activePause2");
      sessionStorage.removeItem("activePause3");
      sessionStorage.removeItem("activePauseCheckIns");
    }
    setCheckedSwitch(event.target.checked);
    setCheckedSwitch2(event.target.checked);
    setCheckedSwitch3(event.target.checked);
    setCheckedSwitch4(event.target.checked);
  };

  const handleChangeSwitches = (event, id) => {
    const switchChecked = event.target.checked;
    const pausedAll = sessionStorage.getItem("activePause");
    if (pausedAll !== null) {
      if (!switchChecked) {
        sessionStorage.removeItem("activePause");
        setCheckedSwitch(event.target.checked);
      }
    }
    if (switchChecked) {
      sessionStorage.setItem(`activePause${id}`, `${switchChecked}`);
    } else {
      sessionStorage.removeItem(`activePause${id}`);
    }
    if (id === 2) setCheckedSwitch2(event.target.checked);
    if (id === 3) setCheckedSwitch3(event.target.checked);
  };

  const handlePauseCheckIns = (event) => {
    const switchChecked = event.target.checked;
    const pausedAll = sessionStorage.getItem("activePauseCheckIns");
    if (pausedAll !== null) {
      if (!switchChecked) {
        sessionStorage.removeItem("activePause");
        setCheckedSwitch(event.target.checked);
      }
    }
    if (switchChecked) {
      sessionStorage.setItem(`activePauseCheckIns`, `${switchChecked}`);
    } else {
      sessionStorage.removeItem(`activePauseCheckIns`);
    }
    setCheckedSwitch4(event.target.checked);
  };

  const renderSettingsContents = () => {
    if (renderCheckIn === 1) {
      return (
        <>
          <BoxCard customClass="settings-boxcard">
            <StatusFlag
              flagLabel={checkedSwitch2 ? "Paused" : "Active"}
              classStatus={checkedSwitch2 ? "flag-paused" : "flag-active"}
            />
            <p className="text-midText reset-margin">COPD Assessment</p>
            <span className="settings-boxcard-chevron">
              <Switch
                checked={checkedSwitch2}
                onChange={(e) => handleChangeSwitches(e, 2)}
              />
            </span>
          </BoxCard>
          <BoxCard customClass="settings-boxcard">
            <StatusFlag
              flagLabel={checkedSwitch3 ? "Paused" : "Active"}
              classStatus={checkedSwitch3 ? "flag-paused" : "flag-active"}
            />
            <p className="text-midText reset-margin">Hypertension Assessment</p>
            <span className="settings-boxcard-chevron">
              <Switch
                checked={checkedSwitch3}
                onChange={(e) => handleChangeSwitches(e, 3)}
              />
            </span>
          </BoxCard>
        </>
      );
    } else if (renderCheckIn === 2) {
      return (
        <BoxCard customClass="settings-boxcard">
          <StatusFlag
            flagLabel={checkedSwitch4 ? "Paused" : "Active"}
            classStatus={checkedSwitch4 ? "flag-paused" : "flag-active"}
          />
          <p className="text-midText reset-margin">Check Ins</p>
          <span className="settings-boxcard-chevron">
            <Switch checked={checkedSwitch4} onChange={handlePauseCheckIns} />
          </span>
        </BoxCard>
      );
    } else {
      return "No contents";
    }
  };
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxCard customClass="settings-modal">
          <p className="text-midText text-left">
            Are you sure that you want to leave the COPD Care Program?
          </p>
          <div className="settings-modal-btns">
            <button onClick={handleOpen} className="settings-secondary-btnFake">
              Cancel
            </button>
            <PrimaryButton
              text="Yes"
              customClass="settings-primaryBtn-fix"
              fn={() => handleLeave()}
            />
          </div>
        </BoxCard>
      </Modal>
      <div className="settings-container">
        <Breadcrumb text="Settings" fn={fn} />
        <div className="settings-titles">
          <p className="text-title settings-title-bottom">Program Settings</p>
          <p className="text-smallText">
            In the next few days your care manager will reach out to help
            facilitate your program exit progress.
          </p>
          <BoxCard customClass="settings-boxcard">
            <p className="text-midText reset-margin">Pause entire program</p>
            <span className="settings-boxcard-chevron">
              <Switch
                {...label}
                checked={checkedSwitch}
                onChange={handleChangeSwitch}
              />
            </span>
          </BoxCard>
        </div>
        <div className="settings-enrolled">
          <p className="text-midText text-left" style={{ marginBottom: "0" }}>
            Pause specific activities
          </p>
          <JourneyTracker
            stages={provTracker}
            settingsTracker={true}
            fn={setRenderCheckIn}
          />
        </div>
        <div className="settings-settings">{renderSettingsContents()}</div>
        <div style={{ textAlign: "left", margin: "3rem 0" }}>
          <LinkButton text="Request Leaving the Program" fn={handleLeave} />
        </div>
        <div className="bottom-spacer-half"></div>
      </div>
    </>
  );
};
