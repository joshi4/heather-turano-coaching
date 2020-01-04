import React, { FC } from "react";
import styled, {
  SimpleInterpolation,
  css
  // FlattenSimpleInterpolation
} from "styled-components";
import {
  makeInset,
  makeResponsive,
  makeSize,
  makeColor,
  makeSpace
} from "@heather-turano-coaching/design-system/utils";

export interface SectionProps {
  styleType: "blank" | "layered" | "hero";
}

const CSSSectionMap: {
  [key in SectionProps["styleType"]]: SimpleInterpolation;
} = {
  blank: css``,
  layered: css`
    ${makeResponsive({
      endAt: "desktop",
      style: `
        background: ${makeColor({ scalable: { color: "light", scale: 3 } })};
      `
    })}
  `,
  hero: css`
    ${makeInset({ vertical: 88, horizontal: 64 })};
  `
};

const CSSSectionContentMap: {
  [key in SectionProps["styleType"]]: SimpleInterpolation;
} = {
  blank: css``,
  layered: css`
    ${makeResponsive({
      beginAt: "desktop",
      style: `
        position: relative;
        margin-bottom: ${makeSpace(56)};
        background: ${makeColor({
          scalable: { color: "light", scale: 3 }
        })};

        &::after {
          content: "";
          position: absolute;
          height: 100%;
          width: ${makeSize({ custom: 700 })};
          right: -${makeSize({ custom: 56 })};
          bottom: -${makeSize({ custom: 56 })};
          background: ${makeColor({
            scalable: { color: "secondary", scale: 3 }
          })};
          z-index: -1;
        }
      `
    })}
  `,
  hero: css``
};

const StyledSection = styled.article<SectionProps>`
  ${makeInset({ vertical: 56, horizontal: 32 })};

  ${({ styleType }) => CSSSectionMap[styleType]};
`;

const StyledSectionContent = styled.div<SectionProps>`
  ${makeResponsive<string>({
    beginAt: "tabletPortrait",
    style: `
      margin: 0 auto;
      max-width: ${makeSize({ custom: 700 })};
    `
  })}

  ${({ styleType }) => CSSSectionContentMap[styleType]};
`;

export const Section: FC<SectionProps> = ({ styleType, children }) => (
  <StyledSection styleType={styleType}>
    <StyledSectionContent styleType={styleType}>
      {children}
    </StyledSectionContent>
  </StyledSection>
);
