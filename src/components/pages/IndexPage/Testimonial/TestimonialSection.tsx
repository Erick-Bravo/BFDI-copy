import React from "react";
import { ContentfulHomePage } from "../../../../pages/IndexPage-types";
import { BoxStyled, ContainerStyled } from "./TestimonialSection.styles";

const TestimonialSection = (props: ContentfulHomePage) => {
  const { testimonial, testimonialParticipant } = props;

  return (
    <ContainerStyled>
      <BoxStyled>{`"${testimonial}"`}</BoxStyled>
      <BoxStyled>{testimonialParticipant}</BoxStyled>
    </ContainerStyled>
  );
};

export default TestimonialSection;
