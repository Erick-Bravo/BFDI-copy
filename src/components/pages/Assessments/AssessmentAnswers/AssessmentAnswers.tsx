import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import {
  AnswerOptions,
  AnswerTypes,
} from "../../../../pages/assessments/AssessmentPage-types";
import { AssessmentAnswersProps } from "./AssessmentAnswers-types";

const AssessmentAnswers = ({
  currentQuestion,
  answers,
  currentQuestionIdx,
  usersSavedQuestions,
  setUsersSavedQuestions,
}: AssessmentAnswersProps) => {
  const getAppropriateAnswers = () => {
    if (currentQuestion.questionType === "custom" && currentQuestion.answers) {
      return currentQuestion.answers;
    }
    const currentQuestionType = currentQuestion.questionType as
      | AnswerTypes.Binary
      | AnswerTypes.Scale;
    return answers[currentQuestionType];
  };

  const handleAnswerClick = ({ text, score }: AnswerOptions) => {
    const updatedSavedQuestions = usersSavedQuestions.map((saved) => {
      if (saved.question === currentQuestion.text) {
        return { ...saved, answer: text, score };
      }
      return { ...saved };
    });
    setUsersSavedQuestions(updatedSavedQuestions);
  };

  const usersCurrentAnswer = usersSavedQuestions[currentQuestionIdx].answer;
  return (
    <ButtonGroup>
      {getAppropriateAnswers()?.map((answer: AnswerOptions, i: number) => (
        <Button
          color={`${
            usersCurrentAnswer === answer.text ? "success" : "primary"
          }`}
          key={`answer-${i}`}
          onClick={() => handleAnswerClick(answer)}
        >
          {answer.text}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default AssessmentAnswers;
