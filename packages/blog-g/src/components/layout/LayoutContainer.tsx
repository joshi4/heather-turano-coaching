import React, { FC } from "react";
import styled, { css } from "styled-components";
import {
  makeSize,
  makeInset,
  makeResponsive,
  makeSpace
} from "@heather-turano-coaching/design-system/utils";
import {
  sharedHorizontalBodyPadding,
  makeFlex
} from "@heather-turano-coaching/components";

export const gutter = 40;

interface LayoutContainerProps {
  layoutType?: "stacked" | "inline";
}

const StyledLayoutContainer = styled.section<Required<LayoutContainerProps>>`
  width: 100%;
  max-width: ${makeSize({ custom: 1024 })};
  box-sizing: border-box;
  margin: 0 auto;

  ${makeInset({
    horizontal: sharedHorizontalBodyPadding.phone,
    top: sharedHorizontalBodyPadding.phone
  })};

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      ${makeInset({
        horizontal: 0,
        top: sharedHorizontalBodyPadding.phone
      })};
    `
  })}

  &:last-child {
    margin-bottom: ${makeSpace({ custom: 48 })};
  }

  ${({ layoutType }) => {
    if (layoutType === "inline") {
      return css`
        ${makeResponsive({
          beginAt: "tabletLandscape",
          style: `
            ${makeFlex("row", "flex-start", "flex-start")};
          `
        })}
      `;
    }
    return css``;
  }}
`;

export const LayoutContainer: FC<LayoutContainerProps> = ({
  layoutType = "inline",
  children
}) => (
  <StyledLayoutContainer layoutType={layoutType}>
    {children}
  </StyledLayoutContainer>
);
