import React, { useState } from "react";
import "./EducationPage.scss";
import { urlGetQueryString } from "../../utils/scripts";
import { BoxCard } from "../../components/boxCard/BoxCard";
import Modal from "@mui/material/Modal";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { EducationUnique } from "./EducationUnique";
import { PrimaryButton } from "../../components/primaryButton/PrimaryButton";
import { EduBrowseContent } from "./eduBrowseContent/EduBrowseContent";

export const EducationPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [toggleBrowse, setToggleBrowse] = useState(false);

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  const handleClose = () => setOpenModal(false);

  const browseContent = () => setToggleBrowse(!toggleBrowse);

  const ChoseRightClass = ({ children }) => {
    if (urlGetQueryString() === null || urlGetQueryString() === "fullpage") {
      return (
        <div
          className={`mobile-scroll-education ${
            urlGetQueryString() === "single"
              ? "mobile-scroll-education-adjustment"
              : ""
          }`}
        >
          {children}
        </div>
      );
    } else {
      return <div>{children}</div>;
    }
  };

  const EducationContents = () => {
    let CommonContents = (
      <>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <BoxCard customClass="education-modal">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/T1G9Rl65M-Q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </BoxCard>
        </Modal>
        <ChoseRightClass>
          <EducationUnique handleOpen={handleOpen} />
        </ChoseRightClass>
        <BoxCard customClass="firstTime-boxCard edu-browse-card" prov={true}>
          <PrimaryButton
            text="Browse All Content"
            customClass="fistTime-primaryBtn edu-browse-btn"
            fn={browseContent}
          />
        </BoxCard>
      </>
    );

    if (urlGetQueryString() === null || urlGetQueryString() === "fullpage") {
      return (
        <MobileContainer>
          <Header visibleHeader={true} />
          {toggleBrowse ? (
            <EduBrowseContent browseContent={browseContent} />
          ) : (
            CommonContents
          )}
          <Footer customClass="footer-moreOptions-bottomFix" />
        </MobileContainer>
      );
    }
    return (
      <>
        <Header visibleHeader={false} />
        {toggleBrowse ? (
          <EduBrowseContent browseContent={browseContent} />
        ) : (
          CommonContents
        )}
      </>
    );
  };
  return <EducationContents />;
};
