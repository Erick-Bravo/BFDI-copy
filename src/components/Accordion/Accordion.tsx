import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, CardActions, CardContent, Collapse } from "@mui/material";
import { useState } from "react";
import React from "react";
import { Paragraph } from "../Paragraph";
import {
  AccordionHeaderContainerStyled,
  CardStyled,
  ScoreStyled,
  SummaryContainer,
} from "./Accordion.styles";
import { AccordionPropTypes } from "./Accordion-types";

const Accordion = ({
  title,
  summary,
  score,
  description,
}: AccordionPropTypes) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <CardStyled square={true}>
      <AccordionHeaderContainerStyled>
        <Paragraph sx={{ fontWeight: 700, margin: "31px 0 31px 16px" }}>
          {title}
        </Paragraph>
        <SummaryContainer>
          <Paragraph>{summary}</Paragraph>
        </SummaryContainer>
        <CardActions>
          <Button onClick={handleExpandClick}>
            {expanded ? (
              <ExpandLessIcon aria-expanded={expanded} aria-label="show more" />
            ) : (
              <ExpandMoreIcon aria-expanded={expanded} aria-label="show less" />
            )}
          </Button>
        </CardActions>
      </AccordionHeaderContainerStyled>

      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        sx={{ padding: "24px 16px 0 16px" }}
      >
        <CardContent sx={{ padding: 0 }}>
          <ScoreStyled>
            Score {score?.assessmentScore}/{score?.maxScore} [
            {score?.assessmentSeverity}-Symptoms]
          </ScoreStyled>
          <Paragraph>{description}</Paragraph>
        </CardContent>
      </Collapse>
    </CardStyled>
  );
};

export default Accordion;
