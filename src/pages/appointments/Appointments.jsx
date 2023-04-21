import React, { useState } from "react";
import "./Appointments.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { LinkButton } from "../../components/linkButton/LinkButton";
import { Divider } from "../../components/divider/Divider";
import { RiArrowDownSFill } from "react-icons/ri";
import { PrimaryButton } from "../../components/primaryButton/PrimaryButton";
import { SectionHeader } from "../../components/sectionHeader/SectionHeader";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Appointments = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  const [requestAppoint, setRequestAppoint] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
      {requestAppoint ? (
        <>
          <SectionHeader
            title="New Appointment Request"
            fn={() => setRequestAppoint(false)}
          />
          <div className="mobile-scroll-appoint appoint-newappoint-section">
            <section className="appoint-page">
              <div className="appoint-container">
                <div className="appoint-tracker">
                  <div className="appoint-tracker-stages-container">
                    <span className="appoint-tracker-stages appoint-tracker-stages-active">
                      1
                    </span>
                    <p className="text-smallText appoint-tracker-text-center">
                      Appointment Details
                    </p>
                  </div>
                  <div className="appoint-tracker-stages-container">
                    <span className="appoint-tracker-stages ">2</span>
                    <p className="text-smallText appoint-tracker-text-center">
                      Contact Details
                    </p>
                  </div>
                  <div className="appoint-tracker-stages-container">
                    <span className="appoint-tracker-stages">3</span>
                    <p className="text-smallText appoint-tracker-text-center">
                      Review & Submit Request
                    </p>
                  </div>
                  <Divider customClass="appoint-tracker-divider" />
                </div>
                <p className="text-title">What can we help you with?</p>
                <div className="appoint-dropdown">
                  <p className="text-smallText appoint-smallText">
                    Select Reason for Appointment
                  </p>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Discuss Care Program
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Exit Care Program</MenuItem>
                        <MenuItem value={20}>Another matter</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <div className="appoint-dropdown-check">
                    <input type="checkbox" />
                    <p className="text-midText reset-margin">
                      Request Video Call
                    </p>
                  </div>
                </div>
                <Divider />
                <p className="text-title appoint-title-maginTop">
                  What can we help you with?
                </p>
                <div className="appoint-choose-time">
                  <p className="text-smallText">Wednesday Mar 29, 2023</p>
                  <div className="appoint-time-cards">
                    <span className="appoint-choose-timeCard text-midText">
                      2:00pm
                    </span>
                    <span className="appoint-choose-timeCard text-midText appoint-timeCard-active">
                      4:00pm
                    </span>
                  </div>
                </div>
                <div className="appoint-choose-time">
                  <p className="text-smallText">Thursday Mar 30, 2023</p>
                  <div className="appoint-time-cards">
                    <span className="appoint-choose-timeCard text-midText">
                      10:00pm
                    </span>
                    <span className="appoint-choose-timeCard text-midText">
                      11:00pm
                    </span>
                    <span className="appoint-choose-timeCard text-midText">
                      12:00pm
                    </span>
                  </div>
                </div>
                <LinkButton text="Show More" />
              </div>
              <div className="bottom-spacer"></div>
            </section>
          </div>
          <div className="appoint-buttons-container appoint-button-newAppoint">
            <PrimaryButton
              text="Next"
              customClass="appoint-button-bottom"
              fn={() => setRequestAppoint(true)}
            />
          </div>
        </>
      ) : (
        <>
          <Header
            toggleNotifActive={toggleNotifActive}
            toggleFavs={toggleFavs}
            toggleHeaderPanels={toggleHeaderPanels}
          />
          <div className="mobile-scroll-appoint">
            <section className="appoint-page">
              <div className="appoint-container">
                <div className="appoint-calendar-cards">
                  <p className="text-midText appoint-midText">
                    March
                    <span className="appoint-midText-icon">
                      <RiArrowDownSFill />
                    </span>
                  </p>
                  <div className="appoint-calendar">
                    <div className="appoint-calendar-text">
                      <p className="text-smallText appoint-smallText">Wed</p>
                      <p className="text-smallText">1</p>
                    </div>
                    <BoxCard customClass="appoint-boxcard">
                      <p className="text-midText appoint-midText">
                        Initial Assessment
                      </p>
                      <p className="text-smallText appoint-smallText">
                        John Doe
                      </p>
                      <p className="text-smallText appoint-smallText">02:35</p>
                      <div className="appoint-links">
                        <LinkButton
                          text="Reschedule"
                          customClass="appoint-link-space-right"
                        />
                        |
                        <LinkButton
                          text="Add to Calendar"
                          customClass="appoint-link-space-left"
                        />
                      </div>
                    </BoxCard>
                  </div>
                  <Divider customClass="appoint-divider" />
                </div>
                <div className="appoint-calendar-cards">
                  <p className="text-midText appoint-midText">
                    March
                    <span className="appoint-midText-icon">
                      <RiArrowDownSFill />
                    </span>
                  </p>
                  <div className="appoint-calendar">
                    <div className="appoint-calendar-text">
                      <p className="text-smallText appoint-smallText">Wed</p>
                      <p className="text-smallText">22</p>
                    </div>
                    <BoxCard customClass="appoint-boxcard">
                      <p className="text-midText appoint-midText">
                        Periodic Check In
                      </p>
                      <p className="text-smallText appoint-smallText">
                        John Doe
                      </p>
                      <p className="text-smallText appoint-smallText">02:35</p>
                      <div className="appoint-links">
                        <LinkButton
                          text="Reschedule"
                          customClass="appoint-link-space-right"
                        />
                        |
                        <LinkButton
                          text="Add to Calendar"
                          customClass="appoint-link-space-left"
                        />
                      </div>
                    </BoxCard>
                  </div>
                  <Divider customClass="appoint-divider" />
                </div>
                <div className="appoint-calendar-cards">
                  <p className="text-midText appoint-midText">
                    March
                    <span className="appoint-midText-icon">
                      <RiArrowDownSFill />
                    </span>
                  </p>
                  <div className="appoint-calendar">
                    <div className="appoint-calendar-text">
                      <p className="text-smallText appoint-smallText">Wed</p>
                      <p className="text-smallText">22</p>
                    </div>
                    <BoxCard customClass="appoint-boxcard">
                      <p className="text-midText appoint-midText">
                        Periodic Check In
                      </p>
                      <p className="text-smallText appoint-smallText">
                        John Doe
                      </p>
                      <p className="text-smallText appoint-smallText">02:35</p>
                      <div className="appoint-links">
                        <LinkButton
                          text="Reschedule"
                          customClass="appoint-link-space-right"
                        />
                        |
                        <LinkButton
                          text="Add to Calendar"
                          customClass="appoint-link-space-left"
                        />
                      </div>
                    </BoxCard>
                  </div>
                </div>
              </div>
              <div className="bottom-spacer"></div>
            </section>
          </div>
          <div className="appoint-buttons-container">
            <PrimaryButton
              text="Request Appointment"
              customClass="appoint-button-bottom"
              fn={() => setRequestAppoint(true)}
            />
          </div>
          <Footer />
        </>
      )}
    </MobileContainer>
  );
};
