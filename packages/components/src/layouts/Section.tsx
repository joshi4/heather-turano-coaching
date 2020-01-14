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
  styleType:
    | "blank"
    | "layered"
    | "hero"
    | "blog"
    | "featured-blog"
    | "blog-page";
}

const CSSSectionMap: {
  [key in SectionProps["styleType"]]: SimpleInterpolation;
} = {
  blank: css`
    ${makeInset({ vertical: 56, horizontal: 32 })};

    ${makeResponsive<string>({
      beginAt: "tabletPortrait",
      style: makeInset({ vertical: 56 })
    })}
  `,
  layered: css`
    ${makeInset({ vertical: 56, horizontal: 32 })};

    ${makeResponsive<string>({
      beginAt: "tabletPortrait",
      style: makeInset({ vertical: 56 })
    })}

    ${makeResponsive({
      endAt: "desktop",
      style: `
        background: ${makeColor({ scalable: { color: "light", scale: 3 } })};
      `
    })}
  `,
  hero: css`
    ${makeInset({ vertical: 88, horizontal: 64 })};
  `,
  blog: css`
    ${makeInset({ vertical: 48, horizontal: 32 })};
  `,
  "featured-blog": css`
    ${makeInset({ vertical: 180, bottom: 48, horizontal: 32 })};

    ${makeResponsive({
      endAt: "desktop",
      style: makeInset({ top: 160, bottom: 48, horizontal: 32 })
    })}
  `,
  "blog-page": css`
    ${makeInset({ bottom: 56, horizontal: 32 })};
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
  hero: css``,
  blog: css`
    max-width: ${makeSize({ custom: 800 })} !important;
  `,
  "featured-blog": css`
    max-width: ${makeSize({ custom: 800 })} !important;
  `,
  "blog-page": css`
    max-width: ${makeSize({ custom: 680 })};
  `
};

const StyledSection = styled.article<SectionProps>`
  ${({ styleType }) => CSSSectionMap[styleType]};
`;

const StyledSectionContent = styled.div<SectionProps>`
  position: relative;
  z-index: 10;

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
