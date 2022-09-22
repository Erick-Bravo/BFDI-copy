import { FormControl } from "@mui/material";
import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import {
  AssessmentAnswers,
  AssessmentPrevNext,
} from "../../components/pages/Assessments";
import AssessmentTrackerLayout from "../../layouts/AssessmentTrackerLayout/AssessmentTrackerLayout";
import {
  AssessmentPageProps,
  UsersSavedQuestions,
} from "./AssessmentPage-types";

const AssessmentPage = ({ data }: AssessmentPageProps) => {
  const {
    contentfulAssessment: {
      title,
      assessment: { answers, questions },
    },
    contentfulButton,
  } = data;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [usersSavedQuestions, setUsersSavedQuestions] = useState<
    UsersSavedQuestions[]
  >([{ question: "", answer: "", score: 0 }]);

  useEffect(() => {
    const unansweredQuestions = questions.map((question) => {
      return { question: question.text, answer: "", score: 0 };
    });
    setUsersSavedQuestions(unansweredQuestions);
  }, [questions]);

  const currentQuestion = questions[currentQuestionIdx];
  const nextDisabled = !usersSavedQuestions?.[currentQuestionIdx]?.answer;
  const resultsDisabled = usersSavedQuestions.some(
    (saved) => saved.answer === "",
  );

  return (
    <AssessmentTrackerLayout>
      <p>Assessment Title: {title}</p>
      <p>
        You are on question {currentQuestionIdx + 1} out of {questions.length}
      </p>
      <FormControl>
        <p>{currentQuestion.text}</p>
        <AssessmentAnswers
          answers={answers}
          currentQuestion={currentQuestion}
          currentQuestionIdx={currentQuestionIdx}
          usersSavedQuestions={usersSavedQuestions}
          setUsersSavedQuestions={setUsersSavedQuestions}
        />
        <div>
          <AssessmentPrevNext
            currentQuestionIdx={currentQuestionIdx}
            questions={questions}
            contentfulButton={contentfulButton}
            setCurrentQuestionIdx={setCurrentQuestionIdx}
            nextDisabled={nextDisabled}
            resultsDisabled={resultsDisabled}
          />
        </div>
      </FormControl>
    </AssessmentTrackerLayout>
  );
};

export default AssessmentPage;

export const query = graphql`
  query AssessmentPage($title: String!) {
    contentfulAssessment(title: { eq: $title }) {
      id
      title
      assessment {
        answers {
          binary {
            score
            text
          }
          scale {
            score
            text
          }
        }
        questions {
          text
          triggerAnswer
          questionType
          answers {
            text
            score
          }
        }
        severityRubric {
          max
          min
          severity
        }
        description
        headings {
          scale
          binary
        }
      }
    }
    contentfulButton(text: { eq: "Results" }) {
      text
      link
    }
  }
`;
