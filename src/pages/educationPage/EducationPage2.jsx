import React, { useEffect, useState } from "react";
import "./EducationPage.scss";
import { BoxCard } from "../../components/boxCard/BoxCard";
import Modal from "@mui/material/Modal";
import { FakeFavorites } from "../../components/header/FakeFavorites/FakeFavorites";
import { EducationUnique } from "./EducationUnique";

export const EducationPage2 = () => {
  const [startState, setStartState] = useState(false);
  const [startState2, setStartState2] = useState(false);
  const [startState3, setStartState3] = useState(false);
  const [startState4, setStartState4] = useState(false);
  const [startState5, setStartState5] = useState(false);
  const [startState6, setStartState6] = useState(false);
  const [addToFavs, setAddToFavs] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {}, [addToFavs]);

  const addContentToFavs = (num) => {
    if (!addToFavs.some((e) => e === num)) {
      setAddToFavs((prev) => [...prev, num]);
    } else {
      let provFavsArr = addToFavs.filter((e) => e !== num);
      setAddToFavs([...provFavsArr]);
    }

    switch (num) {
      case 1:
        setStartState(!startState);
        break;
      case 2:
        setStartState2(!startState2);
        break;
      case 3:
        setStartState3(!startState3);
        break;
      case 4:
        setStartState4(!startState4);
        break;
      case 5:
        setStartState5(!startState5);
        break;
      case 6:
        setStartState6(!startState6);
        break;
      default:
        break;
    }
  };

  const handleOpen = () => {
    setOpenModal(!openModal);
  };

  const handleClose = () => setOpenModal(false);

  return (
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
      <FakeFavorites
        favsState={addToFavs}
        addContentToFavs={addContentToFavs}
      />
      <div className="mobile-education">
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
    </>
  );
};
