import { TestimonialSectionType } from "../components/Testimonial/TestimonialSection-types";

export type IndexPageTypes = {
  contentfulHomePage: ContentfulHomePage;
  allContentfulAssessments: AllContentfulAssessment;
};

export type ContentfulHomePage = {
  introSectionHeader: string;
  introSectionSubheader: string;
  introSectionImage: ContentfulImage;
  universalAssessmentButton: UniversalAssessmentButton;
  testimonial: string;
  testimonialParticipant: string;
  testimonialSection: TestimonialSectionType;
  assessmentInstructionsHeader: string;
  stepOneLabel: string;
  stepOneDescription: string;
  stepTwoLabel: string;
  stepTwoDescription: string;
  stepThreeLabel: string;
  stepThreeDescription: string;
  assessmentStepsImage: ContentfulImage;
  assessmentSectionHeader: string;
  assessmentSectionSubheader: string;
  assessmentButtons: AssessmentButton[];
  universalBottomSubHeader: string;
  universalBottomHeader: string;
};

export type ContentfulImage = {
  description: string;
  gatsbyImageData: GatsbyImageData;
};

export type AssessmentButtonType = {
  buttonText: string;
  assessmentDescription: string;
  assessmentPage: ContentfulAssessmentPage;
};

export type UniversalAssessmentButton = {
  text: string;
  assessment: ContentfulAssessment;
};

export type GatsbyImageData = {
  images: GatsbyImageDataImages;
};

export type GatsbyImageDataImages = {
  sources: GatsbyImageDataImagesSrcSet[];
};

export type GatsbyImageDataImagesSrcSet = {
  srcSet: string;
};

export type AllContentfulAssessment = {
  nodes: ContentfulAssessment[];
};

export type ContentfulAssessmentPage = {
  id: string;
  title: string;
};
