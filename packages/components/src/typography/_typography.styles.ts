import styled, { css } from "styled-components";
import { makeFont, makeReset } from "@heather-turano-coaching/design-system";

const BaseHeading = css`
  ${makeReset("heading")};
  box-sizing: border-box;
`;

console.log(makeReset("heading"));

export const StyledH1 = styled.h1`
  ${BaseHeading};
  ${makeFont({ fontSize: "h1" })}
`;

export const StyledH2 = styled.h2`
  ${BaseHeading};
  ${makeFont({ fontSize: "h2" })}
`;

export const StyledH3 = styled.h3`
  ${BaseHeading};
  ${makeFont({ fontSize: "h3" })}
`;

export const StyledH4 = styled.h4`
  ${BaseHeading};
  ${makeFont({ fontSize: "h4" })}
`;

export const StyledH5 = styled.h5`
  ${BaseHeading};
  ${makeFont({ fontSize: "h5" })}
`;
