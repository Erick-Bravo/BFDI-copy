import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { AssessmentStepper } from "../../components/pages/AssessmentsPage";
import { stepperPages } from "../../components/pages/AssessmentsPage/AssessmentStepper/AssessmentStepper";
import { LayoutContainerStyled } from "../DefaultLayout/DefaultLayout.styles";
import { AssessmentLayoutPropTypes } from "./AssessmentLayout-types";
const AssessmentLayout = ({
  children,
  currentPage,
  startingPage,
  assessmentTitle,
}: AssessmentLayoutPropTypes) => {
  const startingPageProp = startingPage || "";

  const cameFromUniversalQuestions = startingPage === stepperPages.universal;
  const onAssessmentPage = currentPage === stepperPages.assessment;
  const onResultsPage = currentPage === stepperPages.results;

  const getNavButton = () => {
    if (onAssessmentPage && cameFromUniversalQuestions) {
      return <NavButton label="Universal Assessment" link={"/universal/"} />;
    }
    if (onResultsPage) {
      return (
        <NavButton
          label="Assessment Questions"
          link={`/assessments/${assessmentTitle?.toLocaleLowerCase()}/`}
          startingPage={startingPage}
        />
      );
    }
    return <NavButton label="Home" link="/" />;
  };

  return (
    <>
      <NavBar />
      <Box sx={{ marginLeft: "20px" }}>{getNavButton()}</Box>
      <LayoutContainerStyled>
        <AssessmentStepper
          currentPage={currentPage}
          startingPage={startingPageProp}
        />
        {children}
      </LayoutContainerStyled>
      <Footer />
    </>
  );
};

export default AssessmentLayout;
