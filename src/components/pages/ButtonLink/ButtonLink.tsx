import React from "react";
import { ButtonStyled, LinkStyled } from "./ButtonLink.styles";
import { ButtonLinkPropsType } from "./ButtonLink-types";

const ButtonLink = (props: ButtonLinkPropsType) => {
  return (
    <LinkStyled to={props.link}>
      <ButtonStyled disabled={props.disabled}>{props.text}</ButtonStyled>
    </LinkStyled>
  );
};

export default ButtonLink;