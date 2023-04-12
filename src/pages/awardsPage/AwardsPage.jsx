import React from "react";
import "./AwardsPage.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { BsFillTrophyFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export const AwardsPage = () => {
  return (
    <MobileContainer className="appImg">
      <div className="mobile-scroll-awards">
        <Header />
        <section className="awards-page">
          <h1 className="text-title">Awards</h1>
          <p className="text-smallText awards-text-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            Ipsum dolor sit amet.
          </p>
          <div className="awards-badges-section">
            <h2 className="text-midText awards-text-mid">Recent Awards</h2>
            <div className="awards-badges">
              <IconContext.Provider
                value={{
                  className: "awards-trophy",
                }}
              >
                <div className="awards-single-badge">
                  <BsFillTrophyFill />
                  <p className="text-smallText awards-text-small">Award Name</p>
                </div>
                <div className="awards-single-badge">
                  <BsFillTrophyFill />
                  <p className="text-smallText awards-text-small">Award Name</p>
                </div>
                <div className="awards-single-badge">
                  <BsFillTrophyFill />
                  <p className="text-smallText awards-text-small">Award Name</p>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div className="awards-badges-section">
            <h2 className="text-midText awards-text-mid awards-text-mid">
              In Progress
            </h2>
            <div className="awards-badges">
              <IconContext.Provider
                value={{
                  className: "awards-trophy-inprogress",
                }}
              >
                <div className="awards-single-badgeProgress">
                  <BsFillTrophyFill />
                  <p className="text-smallText awards-text-small">Award Name</p>
                  <p className="text-smallText awards-text-small awards-small-text">
                    5/10 read
                  </p>
                </div>
                <div className="awards-single-badgeProgress">
                  <BsFillTrophyFill />
                  <p className="text-smallText awards-text-small">Award Name</p>
                  <p className="text-smallText awards-text-small awards-small-text">
                    5/10 read
                  </p>
                </div>
                <div className="awards-single-badgeProgress">
                  <BsFillTrophyFill />
                  <p className="text-smallText awards-text-small">Award Name</p>
                  <p className="text-smallText awards-text-small awards-small-text">
                    5/10 read
                  </p>
                </div>
                <div className="awards-single-badgeProgress">
                  <BsFillTrophyFill />
                  <p className="text-smallText awards-text-small">Award Name</p>
                  <p className="text-smallText awards-text-small awards-small-text">
                    5/10 read
                  </p>
                </div>
                <div className="awards-single-badgeProgress">
                  <BsFillTrophyFill />
                  <p className="text-smallText awards-text-small">Award Name</p>
                  <p className="text-smallText awards-text-small awards-small-text">
                    5/10 read
                  </p>
                </div>
                <div className="awards-single-badgeProgress">
                  <BsFillTrophyFill />
                  <p className="text-smallText awards-text-small">Award Name</p>
                  <p className="text-smallText awards-text-small awards-small-text">
                    5/10 read
                  </p>
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </MobileContainer>
  );
};
