import React, { useEffect, useState } from "react";
import "./EducationPage.scss";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { ProgressPercentage } from "../../components/progressPercentage/ProgressPercentage";
import { RoundedCard } from "../../components/roundedCard/RoundedCard";
import {
  copdImg,
  dietImg,
  articleImg,
  articleImg2,
  videoImg,
} from "../../data/images";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { redirect } from "../../utils/scripts";
import Modal from "@mui/material/Modal";

export const EducationPage2 = () => {
  const [startState, setStartState] = useState(false);
  const [startState2, setStartState2] = useState(false);
  const [startState3, setStartState3] = useState(false);
  const [startState4, setStartState4] = useState(false);
  const [startState5, setStartState5] = useState(false);
  const [startState6, setStartState6] = useState(false);
  const [addToFavs, setAddToFavs] = useState([]);
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {}, [addToFavs]);

  const toggleHeaderPanels = (action) => {
    if (action === "notifi") {
      if (toggleFavs) setToggleFavs(!toggleFavs);
      setToggleNotifActive(!toggleNotifActive);
    } else if (action === "favs") {
      if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
      setToggleFavs(!toggleFavs);
    }
  };

  const addContentToFavs = (num) => {
    if (addToFavs.includes(num)) {
      let filterElem = addToFavs.filter((el) => el !== num);
      setAddToFavs([...filterElem]);
    } else {
      setAddToFavs([...addToFavs, num]);
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
      <div className="mobile-education">
        {toggleFavs || toggleNotifActive ? (
          ""
        ) : (
          <section className="education-page">
            <div className="education-general-info">
              <BoxCard customClass="education-boxcard">
                <ProgressPercentage
                  progressLabel="Your Progress this Week"
                  value={15}
                />
              </BoxCard>
              <h2 className="text-title education-text-title">
                Your Educational Activities
              </h2>
              <p className="text-smallText education-text-mid">
                Learn more about your conditions by viewing content selected for
                you by your care manager.
              </p>
            </div>
            <div className="education-todo">
              <h2 className="text-midText education-text-mid">COPD</h2>
              <RoundedCard customClass="education-rounded-card">
                <IconContext.Provider
                  value={{
                    className: "button-card-star-inprogress",
                  }}
                >
                  <div className="education-todo-buttons" onClick={handleOpen}>
                    <button className="education-play-button">
                      <BsPlayCircle />
                    </button>
                    <button
                      title="Add to favorites"
                      className="button-card-favs"
                      onClick={() => addContentToFavs(1)}
                    >
                      {startState ? <AiFillStar /> : <AiOutlineStar />}
                    </button>
                  </div>
                </IconContext.Provider>
                <img
                  src={copdImg}
                  alt="What is COPD?"
                  className="image-top-roundedCorners img-tint-dark"
                />
                <div className="education-todo-texts">
                  <p className="text-midText education-semibold-text education-text-mid">
                    What is COPD?
                  </p>
                  <p className="text-midText education-text-mid">
                    Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit
                    amet.
                  </p>
                  <p className="text-smallText education-purple-text education-text-mid">
                    3 min watch
                  </p>
                </div>
              </RoundedCard>
              <h2 className="text-midText education-text-mid">Hypertension</h2>
              <RoundedCard customClass="education-rounded-card">
                <IconContext.Provider
                  value={{
                    className: "button-card-star-inprogress",
                  }}
                >
                  <button
                    title="Add to favorites"
                    className="button-card-favs"
                    onClick={() => addContentToFavs(3)}
                  >
                    {startState3 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <img
                  src={dietImg}
                  alt="Signs and Symptoms of Hypertension"
                  className="image-top-roundedCorners img-tint-dark"
                />
                <div className="education-todo-texts">
                  <p className="text-midText education-semibold-text education-text-mid">
                    Signs and Symptoms of Hypertension
                  </p>
                  <p className="text-midText education-text-mid">
                    Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit
                    amet.
                  </p>
                  <p className="text-smallText education-purple-text education-text-mid">
                    5 min watch
                  </p>
                </div>
              </RoundedCard>
            </div>
            <div className="education-completed">
              <div className="education-completed-header">
                <h2 className="text-midText education-text-mid education-mid-topMargin">
                  COPD
                </h2>
              </div>
              <BoxCard customClass="education-completed-cardContainer">
                <IconContext.Provider
                  value={{
                    className: "button-card-star",
                  }}
                >
                  <button
                    title="Add to favorites"
                    className="button-card-favs"
                    onClick={() => addContentToFavs(4)}
                  >
                    {startState4 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div
                  className="education-completed-card"
                  onClick={() => redirect("/educationArticle")}
                >
                  <img
                    src={articleImg}
                    alt="Article Care Program"
                    className="education-img image-topBottom-roundedCorners"
                  />
                  <div className="education-card-texts">
                    <p className="text-midText education-semibold-text education-text-mid">
                      Article Title
                    </p>
                    <p className="text-smallText education-text-mid">
                      One line description
                    </p>
                  </div>
                </div>
              </BoxCard>
              <BoxCard customClass="education-completed-cardContainer">
                <IconContext.Provider
                  value={{
                    className: "button-card-star",
                  }}
                >
                  <button
                    title="Add to favorites"
                    className="button-card-favs"
                    onClick={() => addContentToFavs(5)}
                  >
                    {startState5 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div
                  className="education-completed-card"
                  onClick={() => redirect("/educationArticle")}
                >
                  <img
                    src={articleImg2}
                    alt="Article Care Program"
                    className="education-img image-topBottom-roundedCorners"
                  />
                  <div className="education-card-texts">
                    <p className="text-midText education-semibold-text education-text-mid">
                      Article Title
                    </p>
                    <p className="text-smallText education-text-mid">
                      One line description
                    </p>
                  </div>
                </div>
              </BoxCard>
            </div>
            <div className="education-completed">
              <div className="education-completed-header">
                <h2 className="text-midText education-text-mid education-mid-topMargin">
                  Hypertension
                </h2>
              </div>
              <BoxCard customClass="education-completed-cardContainer">
                <IconContext.Provider
                  value={{
                    className: "button-card-star",
                  }}
                >
                  <button
                    title="Add to favorites"
                    className="button-card-favs"
                    onClick={() => addContentToFavs(6)}
                  >
                    {startState6 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div
                  className="education-completed-card"
                  onClick={() => redirect("/educationArticle")}
                >
                  <img
                    src={videoImg}
                    alt="Article Care Program"
                    className="education-img image-topBottom-roundedCorners"
                  />
                  <div className="education-card-texts">
                    <p className="text-midText education-semibold-text education-text-mid">
                      Video Title
                    </p>
                    <p className="text-smallText education-text-mid">
                      One line description
                    </p>
                  </div>
                </div>
              </BoxCard>
              <BoxCard customClass="education-completed-cardContainer">
                <IconContext.Provider
                  value={{
                    className: "button-card-star",
                  }}
                >
                  <button
                    title="Add to favorites"
                    className="button-card-favs"
                    onClick={() => addContentToFavs(5)}
                  >
                    {startState5 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div
                  className="education-completed-card"
                  onClick={() => redirect("/educationArticle")}
                >
                  <img
                    src={articleImg2}
                    alt="Article Care Program"
                    className="education-img image-topBottom-roundedCorners"
                  />
                  <div className="education-card-texts">
                    <p className="text-midText education-semibold-text education-text-mid">
                      Article Title
                    </p>
                    <p className="text-smallText education-text-mid">
                      One line description
                    </p>
                  </div>
                </div>
              </BoxCard>
            </div>
            <div className="bottom-spacer"></div>
          </section>
        )}
      </div>
    </>
  );
};
