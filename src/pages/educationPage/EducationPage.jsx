import React, { useContext, useState, useEffect } from "react";
import "./EducationPage.scss";
import { BoxCard } from "../../components/boxCard/BoxCard";
import Modal from "@mui/material/Modal";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { EducationUnique } from "./EducationUnique";
import { DataContext } from "../../data/context/dataContext";

export const EducationPage = () => {
  const {
    startState,
    startState2,
    startState3,
    startState4,
    startState5,
    startState6,
    addContentToFavs,
  } = useContext(DataContext);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    console.log("Re render single");
  }, [
    startState,
    startState2,
    startState3,
    startState4,
    startState5,
    startState6,
  ]);
  console.log("startState: ", startState);
  console.log("startState2: ", startState2);
  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <MobileContainer className="appImg">
      <Header />
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
      <div className="mobile-scroll-education">
        <EducationUnique
          addContentToFavs={addContentToFavs}
          handleOpen={handleOpen}
          startStates={{
            startState,
            startState2,
            startState3,
            startState4,
            startState5,
            startState6,
          }}
        />
      </div>
      <Footer customClass="footer-moreOptions-bottomFix" />
    </MobileContainer>
  );
};
