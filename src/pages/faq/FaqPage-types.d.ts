export type FaqPagePropTypes = {
  contentfulFaqPage: ContentfulFaqPage;
};

export type ContentfulFaqPage = {
  title: string;
  subHeader: FaqSubHeader;
  faqAccordion: FaqAccordion[];
};

export type FaqSubHeader = {
  subHeader: string;
};

export type FaqAccordion = {
  id: string;
  title: string;
  body: FaqAccordionBody;
};

export type FaqAccordionBody = {
  body: string;
};
