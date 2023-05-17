import React, { useState } from "react";
import "./FirstTimeScreen.scss";
import { MobileContainer } from "../../components/mobileContainer/MobileContainer";
import { Header } from "../../components/header/Header";
import { BoxCard } from "../../components/boxCard/BoxCard";
import { PrimaryButton } from "../../components/primaryButton/PrimaryButton";
import { cOPDFirstTimeImg } from "../../data/images";
import { redirect, urlGetQueryString } from "../../utils/scripts";

export const FirstTimeScreen = () => {
  const [toggleNotifActive, setToggleNotifActive] = useState(false);
  const [toggleFavs, setToggleFavs] = useState(false);
  let programTitle = "",
    programDesc = "",
    t1pp1 = "",
    t1pp2 = "",
    t1pp3 = "",
    t1pp4 = "",
    t2pp1 = "",
    t2pp2 = "",
    t2pp3 = "",
    t2pp4 = "",
    t3pp1 = "",
    t3pp2 = "",
    t3pp3 = "",
    t3pp4 = "",
    redirectPath = "";

  const toggleHeaderPanels = (action) => {
    if (action === "notifi") {
      if (toggleFavs) setToggleFavs(!toggleFavs);
      setToggleNotifActive(!toggleNotifActive);
    } else if (action === "favs") {
      if (toggleNotifActive) setToggleNotifActive(!toggleNotifActive);
      setToggleFavs(!toggleFavs);
    }
  };

  if (urlGetQueryString() === "single") {
    redirectPath = "/dashboard?q=single";
    programTitle = "COPD Care Program Overview";
    programDesc =
      "We’ve got the doctor-approved details on the causes, symptoms, treatments, and other facts and tips that can make life with this lung condition easier.";
    t1pp1 =
      "A program that helps someone diagnosed with Chronic Obstructive Pulmonary Disease (COPD) is typically a comprehensive and personalized approach to managing the condition. The program is designed to meet the unique needs of each individual and is usually delivered by a team of healthcare professionals.";
    t1pp2 =
      "When someone enters a COPD program, they can expect a thorough evaluation to determine the severity of their condition and the best course of treatment. This may involve pulmonary function tests, blood work, and imaging tests to evaluate lung function and overall health.";
    t1pp3 =
      "Based on the evaluation, a personalized treatment plan will be developed. This plan may include medication management, pulmonary rehabilitation, nutritional counseling, and behavioral counseling.";
    t1pp4 =
      "Medication management involves the use of bronchodilators and inhaled corticosteroids to help reduce inflammation and improve airflow. The program may also involve antibiotics and/or steroids during COPD exacerbations.";
    t2pp1 =
      "A Chronic Obstructive Pulmonary Disease (COPD) program is a comprehensive approach that can help individuals diagnosed with COPD manage their symptoms and improve their overall quality of life. This type of program typically involves a multidisciplinary team that includes pulmonologists, respiratory therapists, dietitians, and other healthcare professionals who work together to provide a personalized treatment plan for each individual.";
    t2pp2 =
      "The main goal of a COPD program is to reduce the frequency and severity of COPD exacerbations, improve lung function, and help individuals manage their symptoms. The program may involve a combination of medication management, pulmonary rehabilitation, nutritional counseling, and behavioral counseling.";
    t2pp3 =
      "Pulmonary rehabilitation is a critical component of a COPD program. It involves supervised exercise training, breathing techniques, and education on self-management strategies. These exercises and techniques can help individuals improve their lung function, reduce shortness of breath, and increase their ability to perform daily activities.";
    t2pp4 =
      "Finally, behavioral counseling can help individuals with COPD manage the emotional and psychological aspects of their condition. This may involve education on stress management, relaxation techniques, and coping strategies to help individuals better manage their symptoms and maintain a positive outlook on life.";
    t3pp1 =
      "American Lung Association - COPD Action Plan: The American Lung Association provides a comprehensive guide for managing COPD, including an action plan to help individuals with COPD stay on track with their treatment.";
    t3pp2 =
      "Global Initiative for Chronic Obstructive Lung Disease (GOLD): The GOLD website offers guidelines for the management of COPD, including recommendations for diagnosis, treatment, and rehabilitation.";
    t3pp3 =
      "National Heart, Lung, and Blood Institute (NHLBI) - COPD Learn More Breathe Better®: The NHLBI offers a range of resources for individuals with COPD, including information on managing symptoms, pulmonary rehabilitation, and medication management.";
    t3pp4 =
      "COPD Foundation: The COPD Foundation is a non-profit organization dedicated to improving the lives of individuals with COPD. Their website offers a range of resources for managing COPD, including support groups, education programs, and advocacy efforts.";
  } else if (urlGetQueryString() === "multi") {
    redirectPath = "/dashboard?q=multi";
    programTitle = "Care Program Overview";
    programDesc =
      "Lorem ipsum dolor sit amet, consecuter adipsicing elit, sed dosodo.";
    t3pp1 =
      t2pp1 =
      t1pp1 =
        "Lorem laboris nisi ut aliquip ex ea commodo consequat..";
    t3pp2 =
      t2pp2 =
      t1pp2 =
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.";
    t3pp3 =
      t2pp3 =
      t1pp3 =
        "Lorem laboris nisi ut aliquip ex ea commodo consequat.";
    t3pp4 =
      t2pp4 =
      t1pp4 =
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.";
  }

  return (
    <MobileContainer className="appImg">
      <Header
        toggleNotifActive={toggleNotifActive}
        toggleFavs={toggleFavs}
        toggleHeaderPanels={toggleHeaderPanels}
      />
      <div className="mobile-scroll-firstTime">
        <section className="firsTime-page">
          <div className="firstTime-page-contents">
            <img
              className="firstTime-topImg"
              src={cOPDFirstTimeImg}
              alt="Care Program"
            />
            <h1 className="firstTime-title">{programTitle}</h1>
            <p className="firstTime-subText">{programDesc}</p>
            <BoxCard customClass="firstTime-article-boxCard">
              <p className="firstTime-article-title">In this Article</p>
              <ul className="firstTime-article-list">
                <li className="firstTime-list">
                  <a href="#" className="firstTime-list-anchor">
                    What to Expect
                  </a>
                </li>
                <li className="firstTime-list">
                  <a href="#" className="firstTime-list-anchor">
                    How this program can help
                  </a>
                </li>
                <li className="firstTime-list">
                  <a href="#" className="firstTime-list-anchor">
                    Related resources
                  </a>
                </li>
              </ul>
            </BoxCard>
            <div className="firstTime-section-contents" id="what-expect">
              <h2 className="firstTime-subTitle">What to Expect</h2>
              <p className="firstTime-subText">{t1pp1}</p>
              <p className="firstTime-subText">{t1pp2}</p>
              <p className="firstTime-subText">{t1pp3}</p>
              <p className="firstTime-subText">{t1pp4}</p>
            </div>
            <div className="firstTime-section-contents" id="how-help">
              <h2 className="firstTime-subTitle">How this program can help</h2>
              <p className="firstTime-subText">{t2pp1}</p>
              <p className="firstTime-subText">{t2pp2}</p>
              <p className="firstTime-subText">{t2pp3}</p>
              <p className="firstTime-subText">{t2pp4}</p>
            </div>
            <div className="firstTime-section-contents" id="resources">
              <h2 className="firstTime-subTitle">Related resources</h2>
              <p className="firstTime-subText">{t3pp1}</p>
              <p className="firstTime-subText">{t3pp2}</p>
              <p className="firstTime-subText">{t3pp3}</p>
              <p className="firstTime-subText">{t3pp4}</p>
            </div>
            <div className="bottom-spacer"></div>
          </div>
        </section>
      </div>
      <BoxCard customClass="firstTime-boxCard" prov={true}>
        <PrimaryButton
          text="Continue to Care Journey Dashboard"
          customClass="fistTime-primaryBtn"
          fn={() => redirect(redirectPath)}
        />
      </BoxCard>
    </MobileContainer>
  );
};
