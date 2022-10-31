import { Box, Button, Link as MuiLink } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";
import { color } from "../../styles/theme";
import { AnswerStyledProps, PhoneNumberStyledProps } from "./MultiButton-types";

const generalButtonStyles: Object = {
  width: "343px",
  height: "44px",
  padding: "10px 24px",
  fontSize: "18px",
  fontWeight: 600,
  color: "black",
  borderRadius: "8px",
  backgroundColor: "#E6E1E5",
  border: "2px solid black",
  fontFamily: "Roboto",
  textTransform: "none",
  textDecorationLine: "none",
  ":hover": {
    backgroundColor: "#E6E1E5",
    border: "2px solid black",
  },
};

export const StyledBox = styled(Box)({
  width: "100%",
});

export const AssessmentStyled = styled(Button)({
  ...generalButtonStyles,
});

export const UniversalStyled = styled(Button)({
  ...generalButtonStyles,
  color: "white",
  backgroundColor: "black",
  ":hover": {
    backgroundColor: "black",
  },
});

export const LinkStyled = styled(Link)({
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
});

const preventDomList = (prop: string | number | symbol) =>
  prop !== "label" &&
  prop !== "usersCurrentAnswer" &&
  prop !== "light" &&
  prop !== "dark";

export const AnswerStyled = styled(Button, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<AnswerStyledProps>((props) => ({
  ...generalButtonStyles,
  width: "100%",
  margin: "10px 0",
  color:
    props.usersCurrentAnswer === props.label ? color.white : color.teal.one,
  border:
    props.usersCurrentAnswer === props.label
      ? "0"
      : `2px solid ${color.teal.two}`,
  backgroundColor:
    props.usersCurrentAnswer === props.label ? color.teal.one : color.white,
  ":hover": {
    backgroundColor:
      props.usersCurrentAnswer === props.label
        ? color.teal.one
        : color.teal.four,
  },
}));

export const NextAndResultStyled = styled(Button)({
  width: "120px",
  fontSize: "18px",
  color: "white",
  borderRadius: "8px",
  backgroundColor: color.purple.two,
  fontFamily: "Roboto",
  fontWeight: 600,
  textTransform: "none",
  ":hover": {
    backgroundColor: color.purple.one,
  },
  alignSelf: "end",
});

export const PreviousStyled = styled(Button)({
  width: "55px",
  height: "24px",
  fontSize: "14px",
  marginRight: "28px",
  color: color.purple.two,
  borderRadius: "8px",
  fontFamily: "Roboto",
  fontWeight: 500,
  textTransform: "none",
  textDecorationLine: "underline",
  ":hover": {
    textDecorationLine: "underline",
  },
});

export const NavButtonStyled = styled(Button)({
  ...generalButtonStyles,
  width: "162px",
});

export const ResultsPageSmallStyled = styled(Button)({
  ...generalButtonStyles,
  width: "162px",
});

export const PhoneNumberStyled = styled(MuiLink, {
  shouldForwardProp: (prop) => preventDomList(prop),
})<PhoneNumberStyledProps>((props) => ({
  ...generalButtonStyles,
  background: props.type === "dark" ? "black" : "#E6E1E5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: props.type === "dark" ? "white" : "black",
  height: 40,
  marginBottom: 32,
  padding: 0,
}));

export const ExternalLinkStyled = styled(MuiLink)({
  ...generalButtonStyles,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  color: "white",
  backgroundColor: "black",
});

export const AllArticlesStyled = styled(Link)``;
