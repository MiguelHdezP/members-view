import React from "react";
import { BoxCard } from "../../../components/boxCard/BoxCard";
import { Condi1, Condi2, Condi3, Condi4 } from "../../../data/images";

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
    img: Condi1,
    title: "Heart and blood vessels",
  },
  {
    id: 2,
    img: Condi2,
    title: "Infections, vaccines and public health",
  },
  {
    id: 3,
    img: Condi3,
    title: "Mental Health",
  },
  {
    id: 4,
    img: Condi4,
    title: "Healthy living, nutrition & movement",
  },
];

export default function EduBrowseResults({ search = "", fn }) {
  let currentArr = eduContents;
  if (search.length)
    currentArr = eduContents.filter((e) =>
      search.toLowerCase() === ""
        ? e
        : e.title.toLocaleLowerCase().includes(search)
    );

  return currentArr.map((e) => {
    const { img, title, id } = e;
    return (
      <BoxCard customClass="education-completed-cardContainer edubrowseresults">
        <div className="education-completed-card" onClick={() => fn(id)}>
          <img
            src={img}
            alt="Article Care Program"
            className="education-img image-topBottom-roundedCorners"
          />
          <div className="education-card-texts">
            <p className="text-midText education-semibold-text education-text-mid">
              {title}
            </p>
          </div>
        </div>
      </BoxCard>
    );
  });
}
