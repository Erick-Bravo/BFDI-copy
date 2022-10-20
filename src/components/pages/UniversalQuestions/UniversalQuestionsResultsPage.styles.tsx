import { Box, Link as MuiLink } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "gatsby";

export const LinkStyled = styled(Link)({
  textDecorationLine: "none",
});

export const MuiLinkStyled = styled(MuiLink)({
  textDecorationLine: "none",
});

export const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
