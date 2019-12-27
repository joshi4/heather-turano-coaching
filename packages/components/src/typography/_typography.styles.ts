import styled, { css } from "styled-components";
import {
  makeFont,
  makeReset,
  makeSize,
  makeColor
} from "@heather-turano-coaching/design-system/utils";

import { CopyProps } from "./Copy";
import { IconProps } from "./Icon";
import { HeadingProps } from "./Heading";
import { FontProperties } from "@heather-turano-coaching/design-system/types/composite";

/**
 * Headings
 */
const BaseHeading = css`
  ${makeReset("heading")};
`;

type HeadingStyleProps = Required<Pick<HeadingProps, "fontColor">>;

export const StyledH1 = styled.h1<HeadingStyleProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: "h1", fontFamily: "Montserrat", fontColor })}
`;

export const StyledH2 = styled.h2<HeadingProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: "h2", fontFamily: "Montserrat", fontColor })}
`;

export const StyledH3 = styled.h3<HeadingProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: "h3", fontFamily: "Raleway", fontColor })}
`;

export const StyledH4 = styled.h4<HeadingProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: "h4", fontFamily: "Raleway", fontColor })}
`;

export const StyledH5 = styled.h5<HeadingProps>`
  ${BaseHeading};
  ${({ fontColor }) =>
    makeFont({ fontSize: "h5", fontFamily: "Raleway", fontColor })}
`;

/**
 * Copy
 */
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
    fontFamily: "Raleway"
  }
};

export const StyledCopy = styled.p<
  Required<Pick<CopyProps, "fontColor" | "fontSize" | "type">>
>`
  ${BaseCopy};
  ${({ fontSize, fontColor, type }) =>
    makeFont({ ...copyFontMap[type], fontSize: fontSize.size, fontColor })}
`;

/**
 * Icons
 */
export const StyledIcon = styled.div<
  Required<Omit<IconProps, "icon" | "iconWeight" | "spin">>
>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ iconSize }) => css`
    height: ${makeSize(iconSize)};
    width: ${makeSize(iconSize)};
    font-size: ${makeSize(iconSize)};
  `}

  & > svg {
    width: 100%;
    height: auto;

    ${({ iconColor }) => css`
      fill: ${makeColor(iconColor)};
    `}
  }
`;
