import styled, { css } from "styled-components";
import {
  makeFont,
  makeReset,
  MakeFontOptions
} from "@heather-turano-coaching/design-system/utils";
import { CopyProps } from "./Copy";
import { CopyTypes } from "./_typography.types";

/**
 * Headings
 */
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

/**
 * Copy
 */
const BaseCopy = css`
  ${makeReset("paragraph")}
`;
const copyFontMap: { [key in CopyTypes]: Partial<MakeFontOptions> } = {
  paragraph: {
    fontFamily: "Raleway"
  },
  caption: {
    fontFamily: "Raleway"
  },
  text: {
    fontFamily: "Raleway"
  },
  label: {
    fontFamily: "Raleway"
  }
};

export const StyledCopy = styled.p<Required<Pick<CopyProps, "size" | "type">>>`
  ${BaseCopy};
  ${({ size: fontSize, type }) => makeFont({ ...copyFontMap[type], fontSize })}
`;

/**
 * Icons
 */
