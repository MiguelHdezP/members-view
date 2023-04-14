import React, { useEffect, useState } from "react";
import "./EducationPage.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { ProgressPercentage } from "../../components/progressPercentage/ProgressPercentage";
import { RoundedCard } from "../../components/roundedCard/RoundedCard";
import {
  copdImg,
  copdImg2,
  dietImg,
  articleImg,
  articleImg2,
  videoImg,
} from "../../data/images";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsPlayCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { redirect } from "../../utils/scripts";
import { Modal } from "../../components/modal/Modal";

export const EducationPage = () => {
  const [startState, setStartState] = useState(false);
  const [startState2, setStartState2] = useState(false);
  const [startState3, setStartState3] = useState(false);
  const [addToFavs, setAddToFavs] = useState([]);
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [modalComponent, setModalComponent] = useState();

  const openModal = () => {
    setToggleModal(!toggleModal);
  };

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
      default:
        break;
    }
  };

  return (
    <MobileContainer className="appImg">
      {toggleModal ? <Modal>{modalComponent}</Modal> : ""}
      <div className="mobile-scroll-education">
        <Header
          favsState={addToFavs}
          toggleNotifActive={toggleNotifActive}
          toggleFavs={toggleFavs}
          toggleHeaderPanels={toggleHeaderPanels}
          addContentToFavs={addContentToFavs}
        />
        {toggleFavs || toggleNotifActive ? (
          ""
        ) : (
          <section className="education-page">
            <div className="education-general-info">
              <h1 className="text-title education-text-title">
                Your COPD Education
              </h1>
              <p className="text-smallText education-text-mid">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
              <BoxCard customClass="education-boxcard">
                <ProgressPercentage
                  progressLabel="Your Progress this Week"
                  value={15}
                />
              </BoxCard>
            </div>
            <div className="education-todo">
              <h2 className="text-midText education-text-mid">To Do</h2>
              <RoundedCard customClass="education-rounded-card">
                <IconContext.Provider
                  value={{
                    className: "button-card-star-inprogress",
                  }}
                >
                  <div className="education-todo-buttons">
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        position: "absolute",
                        zIndex: "1000",
                        fontSize: "5rem",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        let component = (
                          <iframe
                            src="https://dha.health-ce.wolterskluwer.com/v1/contents/videos/EM_9839.html?r=eyJjaWQiOiIwNzViN2JkZC1hZTUyLTQ2MTAtYTBmOS05N2FkMWYxNWVlMDciLCJ1aWQiOiJhNmY3NTAzODQyMTM0MGJkYjJhN2Y2N2I0ZjAxYmRlYyIsImNvbiI6dHJ1ZX0&lang=en&a=eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRBcHBJZCI6IjdhODMyMWExLTg0YTktNGFhYS05NDFiLWRiMWE1NzZiNDYyOSIsImV4cCI6MTY4MTQ4MTI0MSwiaWF0IjoxNjgxNDM4MDQxLCJtIjoieEwteF9scmJsOUZ4MmoyMVkySlZCY2tfMER5VkVWenZwbnd4NmNmanZRMCIsIm9yZ0lkIjoiODY4OGZmNDYtYzBkZS00NWIyLWFhNzMtMGViOTNkMmViOGQxIn0.jb02FklKNLJi2MRHWPkm_Sl1Ull2WYuw-4odmVNF5To"
                            height="100%"
                            width="100%"
                            title="Iframe Example"
                          ></iframe>
                        );
                        setModalComponent(component);
                        openModal();
                      }}
                    >
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
                  alt="What is COPD"
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
              <RoundedCard customClass="education-rounded-card">
                <IconContext.Provider
                  value={{
                    className: "button-card-star-inprogress",
                  }}
                >
                  <button
                    title="Add to favorites"
                    className="button-card-favs"
                    onClick={() => addContentToFavs(2)}
                  >
                    {startState ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <img
                  src={copdImg2}
                  alt="Risk Factors for COPD"
                  className="image-top-roundedCorners img-tint-dark"
                />
                <div className="education-todo-texts">
                  <p className="text-midText education-semibold-text education-text-mid">
                    Risk Factors for COPD
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
                  alt="Dietitian Tips"
                  className="image-top-roundedCorners img-tint-dark"
                />
                <div className="education-todo-texts">
                  <p className="text-midText education-semibold-text education-text-mid">
                    Dietitian Tips
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
                  Completed
                </h2>
                {/* <LinkButton text="See All" />*/}
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
                    {startState2 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div
                  className="education-completed-card"
                  onClick={() => redirect("/educationArticle")}
                >
                  <img
                    src={articleImg}
                    alt="Article COPD"
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
                    {startState2 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div className="education-completed-card">
                  <img
                    src={articleImg2}
                    alt="Article COPD"
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
                    onClick={() => addContentToFavs(6)}
                  >
                    {startState3 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div className="education-completed-card">
                  <img
                    src={videoImg}
                    alt="Article COPD"
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
            </div>
            <div className="bottom-spacer"></div>
          </section>
        )}

        <Footer />
      </div>
    </MobileContainer>
  );
};
