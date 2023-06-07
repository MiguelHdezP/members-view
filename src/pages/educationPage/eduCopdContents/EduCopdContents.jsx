// @ts-nocheck
import React, { useState } from "react";
import "./EduCopdContents.scss";
import { BoxCard } from "../../../components/boxCard/BoxCard";
import { COPDb1, COPDb2, COPDb3, COPDb4, COPDb5 } from "../../../data/images";
import { redirect } from "../../../utils/scripts";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Modal from "@mui/material/Modal";

const currentLang = sessionStorage.getItem("lang") ?? "en";
let eduActis = "";
let learnMoreDesc = "Lorem ipsum dolor sit amet, consectetur.";

if (currentLang === "en") {
  eduActis = "Browse Content";
} else if (currentLang === "es") {
  eduActis = "Explorar Contenido";
}

const eduContents = [
  {
    id: 1,
    img: COPDb1,
    title: "COPD: What is it?",
    desc: "Online description",
    type: "video",
  },
  {
    id: 2,
    img: COPDb2,
    title: "COPD: Medications",
    desc: "Online description",
    type: "article",
  },
  {
    id: 3,
    img: COPDb3,
    title: "COPD Overview",
    desc: "Online description",
    type: "video",
  },
  {
    id: 4,
    img: COPDb4,
    title: "COPD Diet",
    desc: "Online description",
    type: "article",
  },
  {
    id: 5,
    img: COPDb5,
    title: "Risk Factors of COPD",
    desc: "Online description",
    type: "article",
  },
];

export const EduCopdContents = ({ search = "", fn }) => {
  const [openModal, setOpenModal] = useState(false);
  let currentArr = eduContents;
  if (search.length)
    currentArr = eduContents.filter((e) =>
      search.toLowerCase() === ""
        ? e
        : e.title.toLocaleLowerCase().includes(search)
    );

  const handleOpen = (type) => {
    if (type === "video") {
      setOpenModal(!openModal);
    } else {
      redirect("/educationArticleNutrition");
    }
  };

  const handleClose = () => setOpenModal(false);

  return currentArr.map((e) => {
    const { img, title, desc, type } = e;
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
        <BoxCard customClass="education-completed-cardContainer edubrowseresults">
          <button
            title="Add to favorites"
            className="button-card-favs edu-categos-fav"
          >
            {true ? <AiFillStar /> : <AiOutlineStar />}
          </button>
          <div
            className="education-completed-card"
            onClick={() => handleOpen(type)}
          >
            <img
              src={img}
              alt="Article Care Program"
              className="education-img image-topBottom-roundedCorners"
            />
            <div className="education-card-texts">
              <p className="text-midText education-semibold-text education-text-mid">
                {title}
              </p>
              <p className="edu-contents-desc">{desc}</p>
            </div>
          </div>
        </BoxCard>
      </>
    );
  });
};
