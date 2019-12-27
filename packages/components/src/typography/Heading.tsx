import React, { FC } from "react";
import {
  Size__Headings,
  HTML__Heading,
  ColorProperties
} from "@heather-turano-coaching/design-system/types/composite";

import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5
} from "./_typography.styles";

export type HeadingProps = HTML__Heading & {
  fontSize?: Size__Headings;
  fontColor?: ColorProperties;
  copy?: string | undefined;
};

export const Heading: FC<HeadingProps> = ({
  fontSize = "h1",
  fontColor = { type: "scalable", color: "grayscale" },
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
