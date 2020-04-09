import {
  ColorProperties,
  FontProperties,
} from "@heather-turano-coaching/design-system/types/composite";
import {
  makeFont,
  makeReset,
} from "@heather-turano-coaching/design-system/utils";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { HTMLParagraph } from "../types";

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
export const copyFontMap: {
  [key in CopyProps["type"]]: Partial<FontProperties>;
} = {
  paragraph: {
    fontFamily: "Muli",
  },
  caption: {
    fontFamily: "Muli",
    fontWeight: "bold",
  },
  text: {
    fontFamily: "Muli",
    fontWeight: "light",
  },
  label: {
    fontFamily: "Muli",
    fontWeight: "medium",
  },
};

export const StyledCopy = styled.p<
  Required<Pick<CopyProps, "fontColor" | "fontSize" | "type">> &
    Pick<CopyProps, "lineHeight">
>`
  ${BaseCopy};
  ${({ fontSize, fontColor, lineHeight, type }) =>
    makeFont({
      ...copyFontMap[type],
      fontSize: fontSize,
      fontColor,
      lineHeight,
    })};
`;

export const Copy: FC<CopyProps> = ({
  type,
  fontSize = "sm",
  fontColor = { scalable: { color: "gray" } },
  lineHeight,
  copy = undefined,
  children = undefined,
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
