import React, { useState } from "react";
import "../UserSettings.scss";
import { MobileContainer } from "../../../components/mobileContainer/MobileContainer";
import { Header } from "../../../components/header/Header";
import { Footer } from "../../../components/footer/Footer";
import { BoxCard } from "../../../components/boxCard/BoxCard";
import { HiOutlineChevronRight } from "react-icons/hi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { PrimaryButton } from "../../../components/primaryButton/PrimaryButton";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import { ClickAwayListener } from "@mui/material";
import Modal from "@mui/material/Modal";

export const MemberSettings = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => setOpenModal(!openModal);

  const handleClose = () => setOpenModal(false);

  const handleTooltipClose = () => setOpen(false);
  const handleTooltipOpen = () => setOpen(true);

  const toggleHeaderPanels = (action) => {
    if (action === "notifi") {
      if (toggleFavs) setToggleFavs(!toggleFavs);
      setToggleNotifActive(!toggleNotifActive);
    } else if (action === "favs") {
      if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
      setToggleFavs(!toggleFavs);
    }
  };

  return (
    <MobileContainer className="appImg">
      <Header
        toggleNotifActive={toggleNotifActive}
        toggleFavs={toggleFavs}
        toggleHeaderPanels={toggleHeaderPanels}
      />

      <div className="mobile-scroll-settings">
        <section className="settings-page">
          <div className="settings-container">
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
                  <button
                    onClick={handleOpen}
                    className="settings-secondary-btnFake"
                  >
                    Cancel
                  </button>
                  <PrimaryButton
                    text="Yes"
                    customClass="settings-primaryBtn-fix "
                  />
                </div>
              </BoxCard>
            </Modal>
            <div className="settings-breadcrumb">
              <Breadcrumb text="Member Settings" href="/userSettings" />
            </div>
            <div className="settings-enrolled">
              <p className="text-midText text-left">Care Program</p>
              <BoxCard customClass="settings-boxcard">
                <p className="text-midText reset-margin text-left">
                  Program Overview
                </p>
                <span className="settings-boxcard-chevron">
                  <HiOutlineChevronRight />
                </span>
              </BoxCard>
              <BoxCard customClass="settings-boxcard">
                <p className="text-midText reset-margin text-left">Status</p>
                <span className="settings-boxcard-chevron">
                  <HiOutlineChevronRight />
                </span>
              </BoxCard>
            </div>
            <div className="settings-settings-controls">
              <div className="settings-switch">
                <Switch {...label} />
                <span className="settings-switch-label">Pause Program</span>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                  <Tooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="This actions gives you a temporary break from your program reminders. "
                  >
                    <a
                      onClick={handleTooltipOpen}
                      className="settings-switch-anchor"
                    >
                      <IconContext.Provider
                        value={{
                          className: "settings-info-icon",
                        }}
                      >
                        <BsFillInfoCircleFill />
                      </IconContext.Provider>
                    </a>
                  </Tooltip>
                </ClickAwayListener>
              </div>
              <button
                onClick={handleOpen}
                className="settings-btn-leave text-midText"
              >
                Request Leaving Program
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MobileContainer>
  );
};
