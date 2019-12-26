import styled, { css } from "styled-components";
import {
  makeFont,
  makeReset
} from "@heather-turano-coaching/design-system/utils";

const BaseHeading = css`
  ${makeReset("heading")};
`;

export const StyledH1 = styled.h1`
  ${BaseHeading};
  ${makeFont({ fontSize: "h1", fontFamily: "Montserrat" })}
`;

export const StyledH2 = styled.h2`
  ${BaseHeading};
  ${makeFont({ fontSize: "h2", fontFamily: "Montserrat" })}
`;

export const StyledH3 = styled.h3`
  ${BaseHeading};
  ${makeFont({ fontSize: "h3", fontFamily: "Raleway" })}
`;

export const StyledH4 = styled.h4`
  ${BaseHeading};
  ${makeFont({ fontSize: "h4", fontFamily: "Raleway" })}
`;

export const StyledH5 = styled.h5`
  ${BaseHeading};
  ${makeFont({ fontSize: "h5", fontFamily: "Raleway" })}
`;
