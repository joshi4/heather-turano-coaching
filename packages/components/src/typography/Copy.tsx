import React, { FC } from "react";
import styled, { css } from "styled-components";
import {
  HTMLParagraph,
  ColorProperties,
  FontProperties
} from "@heather-turano-coaching/design-system/types/composite";
import {
  makeReset,
  makeFont
} from "@heather-turano-coaching/design-system/utils";

export type CopyProps = HTMLParagraph & {
  type: "caption" | "text" | "label" | "paragraph";
  fontSize?: FontProperties["fontSize"];
  fontColor?: ColorProperties;
  lineHeight?: FontProperties["lineHeight"];
  copy?: string | undefined;
};

const BaseCopy = css`
  ${makeReset("paragraph")}
`;
const copyFontMap: { [key in CopyProps["type"]]: Partial<FontProperties> } = {
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
    fontFamily: "Raleway",
    fontWeight: "medium"
  }
};

export const StyledCopy = styled.p<
  Required<Pick<CopyProps, "fontColor" | "fontSize" | "lineHeight" | "type">>
>`
  ${BaseCopy};
  ${({ fontSize, fontColor, lineHeight, type }) =>
    makeFont({
      ...copyFontMap[type],
      fontSize: fontSize,
      fontColor,
      lineHeight
    })}
`;

export const Copy: FC<CopyProps> = ({
  type,
  fontSize = "sm",
  fontColor = { scalable: { color: "gray" } },
  lineHeight = "sm",
  copy = undefined,
  children = undefined
}) => (
  <StyledCopy
    type={type}
    fontSize={fontSize}
    fontColor={fontColor}
    lineHeight={lineHeight}
  >
    {copy || children}
  </StyledCopy>
);
