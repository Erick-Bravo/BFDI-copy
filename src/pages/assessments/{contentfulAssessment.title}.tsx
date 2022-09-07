import { graphql, PageProps } from "gatsby";
import React from "react";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

const AssessmentPage = ({ data }: PageProps<Queries.AssessmentPageQuery>) => {
  const { contentfulAssessment: assessment } = data;
  console.log(data);
  return (
    <>
      <p>Assessment ID: {assessment?.id}</p>
      <p>Assessment Title: {assessment?.title}</p>
      <p>Assessment "Questions":</p>
      <ul>
        return (
        <div>
          <li>1</li>
          <li>2</li>
        </div>
        );
      </ul>
      {data.contentfulButton?.text && data.contentfulButton.link && (
        <ButtonLink
          text={data.contentfulButton.text}
          link={data.contentfulButton.link}
        />
      )}
    </>
  );
};

export default AssessmentPage;

export const query = graphql`
  query AssessmentPage($title: String!) {
    contentfulAssessment(title: { eq: $title }) {
      id
      title
    }
    contentfulButton(text: { eq: "Results" }) {
      text
      link
    }
  }
`;
