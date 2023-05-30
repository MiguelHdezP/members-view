import React, { useState } from "react";
import { NotificationsPane } from "../../notificationsPane/NotificationsPane";
import { BoxCard } from "../../boxCard/BoxCard";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { redirect, addFavorites } from "../../../utils/scripts";
import { articleImg, articleImg2, videoImg } from "../../../data/images";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let yourFavs = "";
let favsDesc = "";

if (currentLang === "en") {
  yourFavs = "Your Favorites";
  favsDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.";
} else if (currentLang === "es") {
  yourFavs = "Favoritos";
  favsDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.";
}

export const FakeFavorites = ({ toggleFavs }) => {
  let currentFavs = JSON.parse(sessionStorage.getItem("currentFavs"));
  const [uglyRender, setUglyRender] = useState(false);

  const printCurrentFavs = (currentFav) => {
    if (currentFavs === null) return null;
    return currentFav.map((el, i) => {
      let elements;
      switch (el) {
        case 1:
          elements = (
            <BoxCard customClass="favorites-cardContainer" key={i}>
              <IconContext.Provider
                value={{
                  className: "button-card-star",
                }}
              >
                <button
                  title="Remove from favorites"
                  className="button-card-favs header-card-favs"
                  onClick={() => addFavorites(1, setUglyRender, uglyRender)}
                >
                  <AiFillStar />
                </button>
              </IconContext.Provider>
              <div
                className="favorites-card"
                onClick={() => redirect("/educationArticle")}
              >
                <img
                  src={articleImg}
                  alt="Article Care Program"
                  className="favorites-card-img"
                />
                <div className="favorites-card-texts">
                  <p className="text-midText favorites-semibold-text favorites-text-mid">
                    What is COPD video?
                  </p>
                  <p className="text-smallText favorites-text-mid">
                    Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit
                    amet.
                  </p>
                </div>
              </div>
            </BoxCard>
          );
          break;
        case 2:
          elements = (
            <BoxCard customClass="favorites-cardContainer" key={i}>
              <IconContext.Provider
                value={{
                  className: "button-card-star",
                }}
              >
                <button
                  title="Remove from favorites"
                  className="button-card-favs header-card-favs"
                  onClick={() => addFavorites(1, setUglyRender, uglyRender)}
                >
                  <AiFillStar />
                </button>
              </IconContext.Provider>
              <div
                className="favorites-card"
                onClick={() => redirect("/educationArticle")}
              >
                <img
                  src={articleImg2}
                  alt="Article Care Program"
                  className="favorites-card-img"
                />
                <div className="favorites-card-texts">
                  <p className="text-midText favorites-semibold-text favorites-text-mid">
                    Dietitian Tips
                  </p>
                  <p className="text-smallText favorites-text-mid">
                    Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit
                    amet.
                  </p>
                </div>
              </div>
            </BoxCard>
          );
          break;
        case 3:
          elements = (
            <BoxCard customClass="favorites-cardContainer" key={i}>
              <IconContext.Provider
                value={{
                  className: "button-card-star",
                }}
              >
                <button
                  title="Remove from favorites"
                  className="button-card-favs header-card-favs"
                  onClick={() => addFavorites(1, setUglyRender, uglyRender)}
                >
                  <AiFillStar />
                </button>
              </IconContext.Provider>
              <div
                className="favorites-card"
                onClick={() => redirect("/educationArticle")}
              >
                <img
                  src={articleImg}
                  alt="Article Care Program"
                  className="favorites-card-img"
                />
                <div className="favorites-card-texts">
                  <p className="text-midText favorites-semibold-text favorites-text-mid">
                    Article Title 3
                  </p>
                  <p className="text-smallText favorites-text-mid">
                    One line description
                  </p>
                </div>
              </div>
            </BoxCard>
          );
          break;
        case 4:
          elements = (
            <BoxCard customClass="favorites-cardContainer" key={i}>
              <IconContext.Provider
                value={{
                  className: "button-card-star",
                }}
              >
                <button
                  title="Remove from favorites"
                  className="button-card-favs header-card-favs"
                  onClick={() => addFavorites(1, setUglyRender, uglyRender)}
                >
                  <AiFillStar />
                </button>
              </IconContext.Provider>
              <div
                className="favorites-card"
                onClick={() => redirect("/educationArticle")}
              >
                <img
                  src={articleImg2}
                  alt="Article Care Program"
                  className="favorites-card-img"
                />
                <div className="favorites-card-texts">
                  <p className="text-midText favorites-semibold-text favorites-text-mid">
                    Article Title 4
                  </p>
                  <p className="text-smallText favorites-text-mid">
                    One line description
                  </p>
                </div>
              </div>
            </BoxCard>
          );
          break;
        case 5:
          elements = (
            <BoxCard customClass="favorites-cardContainer" key={i}>
              <IconContext.Provider
                value={{
                  className: "button-card-star",
                }}
              >
                <button
                  title="Remove from favorites"
                  className="button-card-favs header-card-favs"
                  onClick={() => addFavorites(1, setUglyRender, uglyRender)}
                >
                  <AiFillStar />
                </button>
              </IconContext.Provider>
              <div className="favorites-card">
                <img
                  src={videoImg}
                  alt="Video Care Program"
                  className="favorites-card-img"
                />
                <div className="favorites-card-texts">
                  <p className="text-midText favorites-semibold-text favorites-text-mid">
                    Video Title 5
                  </p>
                  <p className="text-smallText favorites-text-mid">
                    One line description
                  </p>
                </div>
              </div>
            </BoxCard>
          );
          break;
        case 6:
          elements = (
            <BoxCard customClass="favorites-cardContainer" key={i}>
              <IconContext.Provider
                value={{
                  className: "button-card-star",
                }}
              >
                <button
                  title="Remove from favorites"
                  className="button-card-favs header-card-favs"
                  onClick={() => addFavorites(1, setUglyRender, uglyRender)}
                >
                  <AiFillStar />
                </button>
              </IconContext.Provider>
              <div
                className="favorites-card"
                onClick={() => redirect("/educationArticle")}
              >
                <img
                  src={articleImg2}
                  alt="Article Care Program"
                  className="favorites-card-img"
                />
                <div className="favorites-card-texts">
                  <p className="text-midText favorites-semibold-text favorites-text-mid">
                    Article Title 6
                  </p>
                  <p className="text-smallText favorites-text-mid">
                    One line description
                  </p>
                </div>
              </div>
            </BoxCard>
          );
          break;
        default:
          break;
      }
      return elements;
    });
  };

  return (
    <NotificationsPane
      customClass={`header-pane ${toggleFavs ? "open-activity" : ""}`}
    >
      <div className="favorites">
        <p className="text-title favorites-title">{yourFavs}</p>
        <p className="text-smallText favorites-text-widthMargin">{favsDesc}</p>
        {printCurrentFavs(currentFavs)}
      </div>
    </NotificationsPane>
  );
};
