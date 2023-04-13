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
  dietImg,
  articleImg,
  dummyVideo,
  dummyImgArticle,
} from "../../data/images";
import { LinkButton } from "../../components/linkButton/LinkButton";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { redirect } from "../../utils/scripts";

export const EducationPage = () => {
  const [startState, setStartState] = useState(false);
  const [startState2, setStartState2] = useState(false);
  const [startState3, setStartState3] = useState(false);
  const [addToFavs, setAddToFavs] = useState([]);
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);

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
      let filterElem = addToFavs.filter((el) => el != num);
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
      <div className="mobile-scroll-education">
        <Header
          favsState={addToFavs}
          toggleNotifActive={toggleNotifActive}
          toggleFavs={toggleFavs}
          toggleHeaderPanels={toggleHeaderPanels}
          addContentToFavs={addContentToFavs}
        />
        {toggleFavs || toggleNotifActive ? (
          <div style={{ marginTop: "13rem" }}>Pollo</div>
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
                <img src={copdImg} alt="What is COPD" />
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
                <img src={dietImg} alt="Dietitian Tips" />
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
                    onClick={() => addContentToFavs(1)}
                  >
                    {startState ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div
                  className="education-completed-card"
                  onClick={() => redirect("/educationArticle")}
                >
                  <img src={articleImg} alt="Article COPD" />
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
                    onClick={() => addContentToFavs(2)}
                  >
                    {startState2 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div className="education-completed-card">
                  <img src={dummyImgArticle} alt="Article COPD" />
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
                    onClick={() => addContentToFavs(3)}
                  >
                    {startState3 ? <AiFillStar /> : <AiOutlineStar />}
                  </button>
                </IconContext.Provider>
                <div className="education-completed-card">
                  <img src={dummyVideo} alt="Article COPD" />
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
