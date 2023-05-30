import React from "react";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { ProgressPercentage } from "../../components/progressPercentage/ProgressPercentage";
import { IconContext } from "react-icons";
import { BsPlayCircle } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  articleImg,
  articleImg2,
  copdImg,
  dietImg,
  videoImg,
} from "../../data/images";
import { RoundedCard } from "../../components/roundedCard/RoundedCard";
import { redirect } from "../../utils/scripts";

export const EducationUnique = ({
  addContentToFavs,
  handleOpen,
  startStates,
}) => {
  const {
    startState,
    startState2,
    startState3,
    startState4,
    startState5,
    startState6,
  } = startStates;
  return (
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
          Learn more about your conditions by viewing content selected for you
          by your care manager.
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
            <div className="education-todo-buttons">
              <button className="education-play-button" onClick={handleOpen}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.
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
              onClick={() => addContentToFavs(2)}
            >
              {startState2 ? <AiFillStar /> : <AiOutlineStar />}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.
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
              onClick={() => addContentToFavs(3)}
            >
              {startState3 ? <AiFillStar /> : <AiOutlineStar />}
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
                Article Title 3
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
              src={articleImg2}
              alt="Article Care Program"
              className="education-img image-topBottom-roundedCorners"
            />
            <div className="education-card-texts">
              <p className="text-midText education-semibold-text education-text-mid">
                Article Title 4
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
              src={videoImg}
              alt="Article Care Program"
              className="education-img image-topBottom-roundedCorners"
            />
            <div className="education-card-texts">
              <p className="text-midText education-semibold-text education-text-mid">
                Video Title 5
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
              {startState6 ? <AiFillStar /> : <AiOutlineStar />}
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
                Article Title 6
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
  );
};
