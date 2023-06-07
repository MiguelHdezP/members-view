// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./EduBrowseContent.scss";
import { InputSearch } from "../../../components/inputSearch/InputSearch";
import EduBrowseResults from "./EduBrowseResults";
import { Breadcrumb } from "../../../components/breadcrumb/Breadcrumb";
import { EduCategosResults } from "../../educationPage/eduCategosResults/EduCategosResults";
import { EduCopdContents } from "../eduCopdContents/EduCopdContents";
import { urlGetQueryString } from "../../../utils/scripts";

export const EduBrowseContent = ({ browseContent }) => {
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
    if (browseResults) {
      console.log("browseResults: ", search, browseResults);
      if (search.toLocaleLowerCase() === "copd") {
        return <EduCopdContents />;
      }
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
      console.log("Noo browseResults: ", search, browseResults);
      return <EduBrowseResults search={search} fn={getCategoriesContent} />;
    }
  };

  const ReturnMobileContainer = ({ children }) => {
    if (urlGetQueryString() !== "single")
      return <div className="mobile-scroll-education">{children}</div>;
    else {
      return <>{children}</>;
    }
  };

  return (
    <>
      <ReturnMobileContainer>
        <section className="education-page">
          {browseResults ? (
            <Breadcrumb
              text="Browse Content"
              activateOnClick={true}
              onClickFn={breadcrumbReset}
              customClass="browse-breadcrumb "
            />
          ) : (
            <Breadcrumb
              text="Go Back"
              activateOnClick={true}
              onClickFn={browseContent}
              customClass="browse-breadcrumb "
            />
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
            <InputSearch fn={setSearch} inputValue={getCategoryInfo} />
          </div>
          <div className="education-categories">{renderRightContent()}</div>
        </section>
      </ReturnMobileContainer>
    </>
  );
};
