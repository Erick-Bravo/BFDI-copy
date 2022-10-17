import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import NavButton from "../../components/NavButton/NavButton";
import { AssessmentStepper } from "../../components/pages/AssessmentsPage";
import {
  localSavedAssessmentKey,
  localSavedPageKey,
} from "../../global-variables";
import { AssessmentTrackerLayoutPropTypes } from "./AssessmentTrackerLayout-types";

const AssessmentTrackerLayout = ({
  children,
  assessmentTitle,
}: AssessmentTrackerLayoutPropTypes) => {
  const steps = {
    universal: [
      {
        label: "Universal Question",
        isComplete: false,
      },
    ],
    default: [
      {
        label: "Assessment Questions",
        isComplete: false,
      },
      {
        label: "Results & Resources",
        isComplete: false,
      },
    ],
  };

  const activeStep = 0;

  const isBrowser = typeof window !== "undefined";

  const localStoragePageData =
    isBrowser && localStorage.getItem(localSavedPageKey);
  const localStorageAssessmentData =
    isBrowser && localStorage.getItem(localSavedAssessmentKey);

  const pageData = JSON.parse(
    localStoragePageData
      ? localStoragePageData
      : '{"cameFromUniversal": false}',
  );
  const assessmentData = JSON.parse(
    localStorageAssessmentData ? localStorageAssessmentData : '{"path": "/"}',
  );

  const cameFromUniversalQuestions = pageData.cameFromUniversal;
  const splitPath = assessmentData.path.split("/");
  const assessment = splitPath[splitPath.length - 2];

  const onResultsPage =
    isBrowser && location.pathname === `/results/${assessment}`;

  const onAssessmentPage =
    isBrowser &&
    location.pathname ===
      `/assessments/${assessmentTitle?.toLocaleLowerCase()}/`;

  const universalQuestionsNavButton =
    cameFromUniversalQuestions && !onResultsPage && onAssessmentPage;

  return (
    <>
      <NavBar />
      <Box sx={{ marginLeft: "20px" }}>
        {universalQuestionsNavButton && (
          <NavButton label="Universal Assessment" link={"/universal"} />
        )}
        {onResultsPage && (
          <NavButton label="Assessment Questions" link={assessmentData.path} />
        )}
        {!onAssessmentPage && !onResultsPage && (
          <NavButton label="Home" link="/" />
        )}
      </Box>
      <AssessmentStepper {...{ activeStep, steps: steps.default }} />
      {children}
      <Footer />
    </>
  );
};

export default AssessmentTrackerLayout;
