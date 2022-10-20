import { graphql, PageProps } from "gatsby";
import React from "react";
import { Header } from "../../../components/Header";
import MultiButton from "../../../components/MultiButton/MultiButton";
import { LinkStyled } from "../../../components/MultiButton/MultiButton.styles";
import {
  ButtonContainer,
  MuiLinkStyled,
} from "../../../components/pages/UniversalQuestions/UniversalQuestionsResultsPage.styles";
import { Paragraph } from "../../../components/Paragraph";
import { UniversalQuestionResultsPagePropTypes } from "./UniversalQuestionResultsPage-types";

const UniversalQuestionResultsPage = ({
  data: {
    contentfulUniversalQuestionResultsPage: {
      header,
      pageDescription,
      dynamicButton,
      firstStaticButtonDescription,
      firstStaticButton,
      secondStaticButtonDescription,
      secondStaticButton,
    },
  },
}: PageProps<UniversalQuestionResultsPagePropTypes>) => {
  const isExternalLink = dynamicButton.buttonLink;
  const isFaq = dynamicButton?.linkToPage;
  console.log(isFaq);

  return (
    <>
      <Header text={header} variant="h2" />
      <Paragraph>{pageDescription}</Paragraph>

      <ButtonContainer>
        {isExternalLink ? (
          <MuiLinkStyled
            href={dynamicButton?.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MultiButton
              version="universal"
              label={dynamicButton?.buttonText}
            />
          </MuiLinkStyled>
        ) : (
          <LinkStyled
            to={
              isFaq
                ? "/faq"
                : `/assessments/${dynamicButton.assessmentPage.title.toLocaleLowerCase()}`
            }
          >
            <MultiButton
              version="universal"
              label={dynamicButton?.buttonText}
            />
          </LinkStyled>
        )}
      </ButtonContainer>

      <Paragraph>{firstStaticButtonDescription}</Paragraph>
      <ButtonContainer>
        <LinkStyled
          to={`/${firstStaticButton?.linkToPage.title.toLocaleLowerCase()}`}
        >
          <MultiButton version="answer" label={firstStaticButton?.buttonText} />
        </LinkStyled>
      </ButtonContainer>

      <Paragraph>{secondStaticButtonDescription}</Paragraph>
      <ButtonContainer>
        <MuiLinkStyled href={`tel:${secondStaticButton?.phoneNumber}`}>
          <MultiButton version="answer" label="Call BFDI" />
        </MuiLinkStyled>
      </ButtonContainer>
    </>
  );
};

export default UniversalQuestionResultsPage;

export const query = graphql`
  query ($title: String!) {
    contentfulUniversalQuestionResultsPage(title: { eq: $title }) {
      title
      header
      pageDescription
      dynamicButton {
        ... on ContentfulAssessmentButton {
          buttonText
          assessmentPage {
            title
          }
        }
        ... on ContentfulButtonInternalLink {
          buttonText
          linkToPage {
            ... on ContentfulFaqPage {
              title
            }
          }
        }
        ... on ContentfulButtonExternalLink {
          buttonText
          buttonLink
        }
      }
      firstStaticButtonDescription
      firstStaticButton {
        buttonText
        linkToPage {
          ... on ContentfulUniversalQuestionPage {
            title
          }
        }
      }
      secondStaticButtonDescription
      secondStaticButton {
        text
        phoneNumber
      }
    }
  }
`;
