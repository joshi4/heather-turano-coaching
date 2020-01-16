import React, { FC } from "react";
import styled, { css } from "styled-components";
import {
  SizeHeadings,
  HTMLHeading,
  ColorProperties
} from "@heather-turano-coaching/design-system/types/composite";
import {
  makeReset,
  makeFont
} from "@heather-turano-coaching/design-system/utils";

export type HeadingProps = HTMLHeading & {
  fontSize?: SizeHeadings;
  fontColor?: ColorProperties;
  copy?: string | undefined;
};

const BaseHeading = css`
  ${makeReset("heading")};
`;

const defaultFontColor: ColorProperties = {
  scalable: {
    color: "gray",
    scale: 0
  }
};

export const CSSH1 = css<HeadingProps>`
  ${({ fontColor = defaultFontColor }) =>
    makeFont({ fontSize: "h1", fontFamily: "Montserrat", fontColor })}
`;

export const CSSH2 = css<HeadingProps>`
  ${({ fontColor = defaultFontColor }) =>
    makeFont({ fontSize: "h2", fontFamily: "Montserrat", fontColor })};
`;
export const CSSH3 = css<HeadingProps>`
  ${({ fontColor = defaultFontColor }) =>
    makeFont({ fontSize: "h3", fontFamily: "Montserrat", fontColor })};
`;
export const CSSH4 = css<HeadingProps>`
  ${({ fontColor = defaultFontColor }) =>
    makeFont({ fontSize: "h4", fontFamily: "Montserrat", fontColor })};
`;
export const CSSH5 = css<HeadingProps>`
  ${({ fontColor = defaultFontColor }) =>
    makeFont({ fontSize: "h5", fontFamily: "Raleway", fontColor })};
`;

export const StyledH1 = styled.h1<HeadingProps>`
  ${BaseHeading};
  ${CSSH1}
`;

export const StyledH2 = styled.h2<HeadingProps>`
  ${BaseHeading};
  ${CSSH2}
`;

export const StyledH3 = styled.h3<HeadingProps>`
  ${BaseHeading};
  ${CSSH3}
`;

export const StyledH4 = styled.h4<HeadingProps>`
  ${BaseHeading};
  ${CSSH4}
`;

export const StyledH5 = styled.h5<HeadingProps>`
  ${BaseHeading};
  ${CSSH5}
`;

export const Heading: FC<HeadingProps> = ({
  fontSize = "h1",
  fontColor = { scalable: { color: "gray" } },
  copy = undefined,
  children = undefined
}) => {
  switch (fontSize) {
    case "h1":
      return <StyledH1 fontColor={fontColor}>{copy || children}</StyledH1>;
    case "h2":
      return <StyledH2 fontColor={fontColor}>{copy || children}</StyledH2>;
    case "h3":
      return <StyledH3 fontColor={fontColor}>{copy || children}</StyledH3>;
    case "h4":
      return <StyledH4 fontColor={fontColor}>{copy || children}</StyledH4>;
    case "h5":
      return <StyledH5 fontColor={fontColor}>{copy || children}</StyledH5>;
    default:
      return <StyledH1 fontColor={fontColor}>{copy || children}</StyledH1>;
  }
};
