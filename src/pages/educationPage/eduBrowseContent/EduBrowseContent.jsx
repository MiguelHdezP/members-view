// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./EduBrowseContent.scss";
import { Footer } from "../../../components/footer/Footer";
import { InputSearch } from "../../../components/inputSearch/InputSearch";
import EduBrowseResults from "./EduBrowseResults";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { EduCategosResults } from "../../educationPage/eduCategosResults/EduCategosResults";
import { EduCopdContents } from "../eduCopdContents/EduCopdContents";

export const EduBrowseContent = () => {
  const [search, setSearch] = useState("");
  const [getCategoryInfo, setGetCategoryInfo] = useState(0);
  const [browseResults, setBrowseResults] = useState(false);
  const currentLang = sessionStorage.getItem("lang") ?? "en";
  let eduActis = "";
  let learnMoreDesc = "Lorem ipsum dolor sit amet, consectetur.";

  useEffect(() => {
    console.log("useEffect: ", search, browseResults, search === "copd");
    if (getCategoryInfo > 0 || search === "copd") {
      setBrowseResults(true);
    }
  }, [search, getCategoryInfo]);
  console.log("useEffect ourside: ", browseResults);
  if (currentLang === "en") {
    eduActis = "Browse Content";
  } else if (currentLang === "es") {
    eduActis = "Explorar Contenido";
  }

  const getCategoriesContent = (id) => {
    setGetCategoryInfo(id);
  };

  const breadcrumbReset = () => {
    setGetCategoryInfo(0);
    setSearch("");
    setBrowseResults(false);
  };

  const renderRightContent = () => {
    console.log("Search: ", search, browseResults);
    if (browseResults) {
      if (search.toLocaleLowerCase() === "copd") return <EduCopdContents />;
      switch (getCategoryInfo) {
        case 1:
          return "There are no results";
        case 2:
          return "There are no results";
        case 3:
          return "There are no results";
        case 4:
          return <EduCategosResults />;
        default:
          break;
      }
    } else {
      return <EduBrowseResults search={search} fn={getCategoriesContent} />;
    }
  };

  return (
    <>
      <div className="mobile-scroll-education">
        <section className="education-page">
          {browseResults ? (
            <Breadcrumb
              text="Browse Content"
              activateOnClick={true}
              onClickFn={breadcrumbReset}
              customClass="browse-breadcrumb "
            />
          ) : (
            ""
          )}
          <div className="education-general-info">
            {browseResults ? (
              ""
            ) : (
              <>
                <h2 className="text-title education-text-title">{eduActis}</h2>
                <p className="text-smallText education-text-mid reset-margin">
                  {learnMoreDesc}
                </p>
              </>
            )}
            <InputSearch fn={setSearch} placeholder={getCategoryInfo} />
          </div>
          <div className="education-categories">{renderRightContent()}</div>
        </section>
      </div>
      <Footer customClass="footer-moreOptions-bottomFix" />
    </>
  );
};
